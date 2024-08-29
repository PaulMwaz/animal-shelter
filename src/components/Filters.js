import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const handleSelectChange = (e) => {
    onChangeType(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="micropig">Micropig</option>
      </select>
      <button onClick={onFindPetsClick}>Find pets</button>
    </div>
  );
}

export default Filters;
