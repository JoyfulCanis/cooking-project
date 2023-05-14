import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import "../style/Articles.css"
import axios from 'axios';


const Articles = ({research}) => {

    const [meals, updateMeals] = useState([]);

useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then((res) => updateMeals(res.data.meals))
    }, [])

    return (
        <main className='articles'>
            {
                meals.map((meal) => (
                    <Cards key={meal.idMeal} meal={meal}/>
                ))
                
                }

        </main>
    );
};

export default Articles;