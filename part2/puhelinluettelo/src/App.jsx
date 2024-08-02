import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  // Alustetaan tilat henkilöiden, uuden nimen, numeron ja suodattimen hallintaan
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // Haetaan henkilöt palvelimelta komponentin alussa
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Päivitetään newName-tila, kun nimen syötekenttää päivitetään
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Päivitetään newNumber-tila, kun numeron syötekenttää päivitetään
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // Päivitetään filter-tila, kun käyttäjä muuttaa hakukenttää
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Lisätään uusi henkilö puhelinluetteloon
  const addPerson = (event) => {
    event.preventDefault();
    
    // Tarkistetaan onko nimi jo luettelossa
    const nameExists = persons.find(person => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    // Uusi henkilöobjekti
    const personObject = {
      name: newName,
      number: newNumber,
    };

    // Lähetetään uusi henkilö palvelimelle
    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        console.error('Error adding person: ', error);
      });
  };

  // Suodatetaan näytettävät henkilöt hakukentän arvon perusteella
  const personsToShow = filter
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
