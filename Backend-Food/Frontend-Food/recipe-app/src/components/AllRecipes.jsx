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
    <div className="recipes-container">
      <h2>All Recipes</h2>
      <div className="cards-wrapper">
        {recipes?.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <img className='w-100' src={`http://localhost:5000/public/images/${recipe.coverImage}`} alt={recipe.title} />
            <h4>{recipe?.title}</h4>
            <p>{recipe?.ingredients}</p>
            <small>{recipe?.instructions}</small>
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