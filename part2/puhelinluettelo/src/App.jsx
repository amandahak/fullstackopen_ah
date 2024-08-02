import { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  //Alustetaan tilat henkilöiden, uuden nimen, numeron ja suodattimen hallintaan
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  //päivitään nerName-tila, kun nimen syötekenttää päivitetään 
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  //päivitään newNumber-tila, kun nimen syötekenttää päivitetään
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
    
    //tarkistetaan onko nimi jo luettelossa
    const nameExists = persons.find(person => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    //uusi henkilöobjekti
    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
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