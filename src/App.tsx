import React, {useEffect, useState} from 'react';
import { getAllCountries } from './services/api/countries';
import CountryCard from './components/CountryCard';
import './App.css';
import {getRandomCountry} from './util/random';

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
    <div>
      { isLoading ? <p>Loading...</p> :
        <CountryCard>{ country }</CountryCard>
      }
    </div>
  );
}