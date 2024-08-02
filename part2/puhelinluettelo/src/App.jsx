import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  // Alustetaan tilat henkilöiden, uuden nimen, numeron ja suodattimen hallintaan
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // Haetaan henkilölista palvelimelta
  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
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
      const confirmReplace = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmReplace) {
        const updatedPerson = { ...nameExists, number: newNumber };
        personService
          .update(nameExists.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => 
              person.id !== nameExists.id ? person : returnedPerson
            ));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.error('Error updating person: ', error);
            alert('Error updating person. Please try again.');
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.error('Error adding person: ', error);
          alert('Error adding person. Please try again.');
        });
    }
  };

  // Poistetaan henkilö puhelinluettelosta
  const deletePerson = id => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error deleting person: ', error);
          alert('Error deleting person. Please try again.');
        });
    }
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
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
