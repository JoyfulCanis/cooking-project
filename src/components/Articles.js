import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import "../style/Articles.css"
import axios from 'axios';


const Articles = () => {
    const [lookingFor, updateLookingFor] = useState("")
    const [meals, updateMeals] = useState([]);
    // const ingredientTimes = Array.from({length: 20}, (_, i) => `ingredient${i + 1}`);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then((res) => updateMeals(res.data.meals))
    }, [])

    return (
        <div className='articles-container'>

            <input type="text"
                placeholder="onion, beef, carrot..." className="header__research"
                onChange={(e) => {
                    updateLookingFor(e.target.value)
                }} />

            <main className='articles'>

                {
                    meals
                        .filter(meal => {
                            for (let i = 1; i <= 20; i++) {
                                let ingredient = meal['strIngredient' + i];
                                if (ingredient && ingredient.toLowerCase().includes(lookingFor.toLowerCase())) {
                                    return true;
                                }
                            }
                            return false;
                        })
                        .map((meal) => (
                            <Cards key={meal.idMeal} meal={meal} />
                        ))

                }

            </main>
        </div>
    );
};

export default Articles;