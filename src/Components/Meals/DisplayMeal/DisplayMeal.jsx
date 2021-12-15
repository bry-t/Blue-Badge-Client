import React, {useState, useEffect} from "react";
import './displayMeal.css';

const DisplayMeal = (props) => {

    const [thing, setThing] = useState([])

    const doTheThing = () => {
    const arr = []

        for(let i in props.nutroObj) {
            console.log(i)
            props.nutroObj[i].map((selectedFoods, key) => {
                arr.push([selectedFoods])
        // if (selectedFoods.length < 2) {
            //     return(null)
            // }
        //     return(
        //         <>
        //     <tr key={key}>
        //         <td>Food: {selectedFoods[0]} Protein: {selectedFoods[1]} Fats: {selectedFoods[2]} Carbs: {selectedFoods[3]} kCal: {selectedFoods[4]}</td>
        //     </tr>

        //     {console.log(selectedFoods[0], selectedFoods[1])}
        //     <h1>Stuff</h1>
        //     </>
        // )
    })
    setThing(arr)
    console.log(arr)
}}


useEffect(() => {
    doTheThing()
}, [props])


    return(
        <>
            {
            thing.map((selectedFoods, key) => {
            return(
                <tr key={key}>
                <td>Food: {selectedFoods}</td>
                <td>Protein: {selectedFoods}</td>
                <td>Fats: {selectedFoods}</td>
                <td>Carbs: {selectedFoods}</td>
                <td>kCal: {selectedFoods}</td>
            </tr>
            )

            })
            }
            <h1>stuff</h1>
        </>
    )
}

export default DisplayMeal;