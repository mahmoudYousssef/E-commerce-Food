import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiHeart } from 'react-icons/hi';

function AllRecipes() {
  const [recipes, setRecipes] = useState([]); 
  
  useEffect(() => {
    axios.get('http://localhost:5000/recipe')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);
  
  return (  
    <div className="all-recipes">
      <h2>All Recipes</h2>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h4>{recipe.title}</h4>
            <p>{recipe.ingredients}</p>
            <small>{recipe.instructions}</small>
            <div className="icons">
              <HiHeart/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;