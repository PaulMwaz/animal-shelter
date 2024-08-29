import React, { useState } from 'react';
import Filters from './components/Filters';
import PetBrowser from './components/PetBrowser';
import data from './db.json';

const App = () => {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleChangeType = (type) => {
    setFilter(type);
  };

  const handleFindPetsClick = () => {
    const filteredPets = data.pets.filter((pet) =>
      filter === 'all' ? true : pet.type === filter
    );
    setPets(filteredPets);
  };

  const handleAdoptPet = (id) => {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  return (
    <div className="app">
      <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
      <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
    </div>
  );
};

export default App;
