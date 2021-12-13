import React, { useState, useEffect } from 'react';
import "../Meals/meals.css"
import { Button } from 'reactstrap'
import CreateMeal from '../Meals/CreateMeal/CreateMeal';

const Meals = (props) => {
    const [displayMeal, setDisplayMeal] = useState(false)

    const fetchMeals = () => {
        const apiKey = 'LW8AOgBbdNG1aaAfjYpJvcKiNPBH30oLkJmC08lu'
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=rice`

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchMeals()
    },[])

    return (
        <>
            <Button onClick={(e) => setDisplayMeal(true)}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal}/> : null}
        </>
    )
}

export default Meals;