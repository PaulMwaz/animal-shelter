import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { name, type, age, weight, gender, isAdopted } = pet;

  const handleAdoptClick = () => {
    onAdoptPet(pet.id);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>Gender: {gender === "male" ? "♂" : "♀"}</p>
      <button onClick={handleAdoptClick} disabled={isAdopted}>
        {isAdopted ? "Already Adopted" : "Adopt"}
      </button>
    </div>
  );
}

export default Pet;
