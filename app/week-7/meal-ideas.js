"use client";
import { useState, useEffect } from "react";

// Define the API fetching function for meals
async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

// Define the API fetching function for meal details
async function fetchMealDetails(mealId) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals[0] || {};
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  const loadMealIdeas = async () => {
    const mealsData = await fetchMealIdeas(ingredient);
    setMeals(mealsData);
    setSelectedMeal(null); // Reset selected meal when ingredient changes
    setMealDetails(null);  // Reset meal details when ingredient changes
  };

  const loadMealDetails = async (mealId) => {
    const details = await fetchMealDetails(mealId);
    setMealDetails(details);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const handleMealClick = (mealId) => {
    setSelectedMeal(mealId);
    loadMealDetails(mealId);
  };

  return (
    <div className="bg-slate-950 p-2 m-2 max-w-sm w-full">
      {mealDetails ? (
        <>
          <h3 className="text-2xl font-bold text-orange-500 mb-2">{mealDetails.strMeal}</h3>
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className="w-full h-auto mb-4" />
          <h4 className="text-xl font-bold text-gray-300 mb-2">Ingredients</h4>
          <ul className="list-disc list-inside text-gray-300">
            {Object.keys(mealDetails)
              .filter(key => key.startsWith('strIngredient') && mealDetails[key])
              .map(key => (
                <li key={key}>
                  {mealDetails[key]} - {mealDetails[`strMeasure${key.slice(13)}`]}
                </li>
              ))}
          </ul>
        </>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-orange-500 mb-2">Meal Ideas with {ingredient}</h3>
          {meals.length > 0 ? (
            <ul>
              {meals.map((meal) => (
                <li key={meal.idMeal} className="p-2 m-4 bg-slate-900 max-w-sm cursor-pointer" onClick={() => handleMealClick(meal.idMeal)}>
                  <h4 className="text-xl font-bold text-gray-300">{meal.strMeal}</h4>
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-50">No meal ideas found.</p>
          )}
        </>
      )}
    </div>
  );
}
