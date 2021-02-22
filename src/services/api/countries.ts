const BASE_ENDPOINT = 'https://restcountries.eu/rest/v2';

export async function getAllCountries() {
  const requestOptions = {
    method: 'GET'
  };

  const response = await fetch(`${BASE_ENDPOINT}/all`, requestOptions);
  return response.json();
}