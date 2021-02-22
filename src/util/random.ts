import {getAllCountries} from '../services/api/countries';

export async function getRandomCountry() {
  const countries = await getAllCountries();
  return countries[Math.floor(Math.random() * (countries.length - 1))];
}

