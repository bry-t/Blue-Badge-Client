import React, {useState, useEffect} from "react";
import './displayMeal.css';

const DisplayMeal = (props) => {

    const [thing, setThing] = useState([])

    const doTheThing = () => {
            let index = Object.values(props.nutroObj)
            console.log(index)
            setThing(index)
}


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

export default DisplayMeal;