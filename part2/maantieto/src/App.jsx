import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://restcountries.com/v3.1/name/${query}`)
        .then(response => setCountries(response.data))
        .catch(error => console.error('Error fetching country data:', error));
    } else {
      setCountries([]);
    }
  }, [query]);

  const handleSearch = event => {
    setQuery(event.target.value);
  };

  const handleSelectCountry = country => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country Information</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleSearch}
      />
      {countries.length > 10 && (
        <p>Too many matches, use another word as a filter</p>
      )}
      {countries.length <= 10 && countries.length > 1 && (
        <CountryList countries={countries} onSelectCountry={handleSelectCountry} />
      )}
      {countries.length === 1 && <CountryDetail country={countries[0]} />}
      {selectedCountry && <CountryDetail country={selectedCountry} />}
    </div>
  );
};

export default App;
