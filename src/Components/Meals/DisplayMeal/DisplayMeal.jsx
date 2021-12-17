import React, { useState, useEffect } from "react";
import './displayMeal.css';

const DisplayMeal = (props) => {

    const [thing, setThing] = useState([])
    const [reqBodyPost, setReqBodyPost] = useState('')

    const doTheThing = () => {
        let index = Object.values(props.nutroObj)
        console.log(index)
        setThing(index)
    }

    const reqBody = (food) => {
        console.log(food)
        const keys = ["foodName", "protein", "carbs", "fats", "kCal", "mealCat"]
        const values = thing[food]
        const newCat = parseInt(props.mealCat)
        console.log(newCat)
        values.push(newCat)
        console.log(values)
        const result = {};
        for (let index = 0; index < keys.length; ++index) {
            result[keys[index]] = (values[index]);
        }
        setReqBodyPost(result)
    }
    
    const postMeal = () => {


        let url = `http://localhost:${process.env.REACT_APP_PORT}/meal/create`

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBodyPost),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
            })
            .then(res => res.json())
            .then(data => props.toggleModal())
            .then(props.fetchMeals())
            .then(props.displayInRightSpot(props.category))
            .catch(err => console.log(err))
        };


        console.log(reqBodyPost)

        useEffect(() => {
            doTheThing()
        }, [props])


        return (
            <>
                <h3>After search select the row you want</h3>
                {
                    thing.map((selectedFoods, key) => {
                        return (
                            <tbody key={key} >
                                <td id={[key]} onClick={(e) => postMeal(reqBody(e.target.id))}>Food: {selectedFoods[0]} Protein: {selectedFoods[1]} Fats: {selectedFoods[2]} Carbs: {selectedFoods[3]} kCal: {selectedFoods[4]}</td>
                            </tbody>
                        )

                    })
                }
            </>
        )
    }

    export default DisplayMeal;