import React from 'react';
import styled from 'styled-components';

interface Props {
  children: any;
}

const CountryCardStyles = styled.div`
  background-color: var(--clr-white);
  border-radius: var(--br-card);
  padding: 1em;
  
  img {
    max-width: 500px;
  }
`;

export default function CountryCard({ children }: Props) {
  console.log(children);
  return (
    <CountryCardStyles>
      <h3>{ children.name }</h3>
      <p>Capital: { children.capital }</p>
      <p>Region: { children.region }</p>
      <p>Subregion: { children.subregion }</p>
      <p>Country Codes: { children.alpha2Code } / { children.alpha3Code }</p>

      <img src={children.flag}/>
    </CountryCardStyles>
  );
}