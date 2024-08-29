import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "./db.json";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = () => {
    const filteredPets = filters.type === "all" 
      ? data.pets 
      : data.pets.filter(pet => pet.type === filters.type);
    setPets(filteredPets);
  };

  const onAdoptPet = (id) => {
    const updatedPets = pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  return (
    <div>
      <Filters 
        onChangeType={onChangeType} 
        onFindPetsClick={onFindPetsClick} 
      />
      <PetBrowser 
        pets={pets} 
        onAdoptPet={onAdoptPet} 
      />
    </div>
  );
}

export default App;
