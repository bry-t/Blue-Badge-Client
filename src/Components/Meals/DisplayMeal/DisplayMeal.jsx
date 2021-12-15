import React, {useState, useEffect} from "react";
import './displayMeal.css';

const DisplayMeal = (props) => {

    const [thing, setThing] = useState([])

    const doTheThing = () => {
            let index = Object.values(props.nutroObj)
            console.log(index)
            setThing(index)

}

    const postMeal = (event, props) => {
        event.preventDefault()

        let url = `http://localhost:3100/meal/create`

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                foodName: props.foodName,
                protein: props.protein,
                carbs: props.carbs,
                fats: props.fats,
                kCal: props.kCal,
                mealCat: props.mealCat
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
            .then(res => res.json())
            .then(data => props.toggleModal)
            .catch(err => console.log(err))
        })}


useEffect(() => {
    doTheThing()
}, [props])


    return(
        <>
        <h3>After search select the row you want</h3>
            {
            thing.map((selectedFoods, key) => {
            return(
            <tr key={key}>
                <td>Food: {selectedFoods[0]}</td>
                <td>Protein: {selectedFoods[1]}</td> 
                <td>Fats: {selectedFoods[2]}</td>
                <td>Carbs: {selectedFoods[3]}</td> 
                <td>kCal: {selectedFoods[4]}</td>
            </tr>
            )

            })
            }
        </>
    )
}

export default DisplayMeal