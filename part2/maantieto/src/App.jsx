import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

const App = () => {
  // Määritellään tilat (maat, hakusana, valittu maa)
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Poista ylimääräiset välilyönnit hakusanasta
    const trimmedQuery = query.trim();

    // API-pyyntö aina, kun hakusana muuttuu
    if (trimmedQuery) {
      axios
        .get(`https://restcountries.com/v3.1/name/${trimmedQuery}`)
        .then(response => {
          // Jos hakutuloksia on vain yksi, valitaan se automaattisesti
          if (response.data.length === 1) {
            setSelectedCountry(response.data[0]);
          }
          setCountries(response.data);
        })
        .catch(error => console.error('Error fetching country data:', error));
    } else {
      setCountries([]); // Tyhjennys
      setSelectedCountry(null); // Tyhjennetään valittu maa, jos hakusana on tyhjennetty
    }
  }, [query]);

  const handleSearch = event => {
    setQuery(event.target.value);
  };

  // Valitaan maa tilaksi
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
      {selectedCountry && <CountryDetail country={selectedCountry} />}
    </div>
  );
};

export default App;
