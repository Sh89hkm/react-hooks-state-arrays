import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    
    // Removing Elements From Arrays In State
    // When a user clicks on a food, that food should be removed from the list.
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
    
    /* 
    // Updating Elements in Arrays in State
    // update our click feature so that when a user clicks on a food, 
    // that food's heat level is incremented by 1
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
    */
  }

  // Working With Multiple State Variables

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  
  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
    );

  /*
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
  */

}

export default SpicyFoodList;
