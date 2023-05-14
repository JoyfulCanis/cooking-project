import React, { useEffect, useState } from 'react';



const Cards = ({ meal }) => {

    const [isMouseInside, setIsMouseInside] = useState(false);

    return (
        <article className='cards'
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
        >
            <div>
                <h2 className='cards__title'>{meal.strMeal}</h2>
                <p className='cards__origin'>Origin: {meal.strArea}</p>
            </div>
            <div className='cards__img-container'>
                <div 
                className={isMouseInside ? "cards__img-on" : "cards__img-off"}>
                    <span 
                    className={isMouseInside?"cards__img-text-on":"cards__img-text"}>{meal.strCategory}</span>
                </div>
                <img className='cards__img' src={meal.strMealThumb} alt={meal.strMeal} />
            </div>

            <p className='cards__text'>{meal.strInstructions}</p>

        </article>
    );
};

export default Cards;