import React, {useEffect, useState} from 'react';
import CountryCard from './components/CountryCard';
import './App.css';
import {getRandomCountry} from './util/random';
import styled from 'styled-components';

const AppStyles = styled.div`
  background-color: var(--clr-primary-lt);
  height: 100%;
`;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState();

  const getCountry = async () => {
    const data = await getRandomCountry();
    setCountry(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCountry();
  }, []);
  return (
    <AppStyles>
      { isLoading ? <p>Loading...</p> :
        <CountryCard>{ country }</CountryCard>
      }
    </AppStyles>
  );
}