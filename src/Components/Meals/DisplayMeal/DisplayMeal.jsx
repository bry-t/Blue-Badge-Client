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
<<<<<<< HEAD
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
=======
            props.nutroObj.map((selectedFoods, key) => {
                    return(
                        <tr key={key}>
                            <td onClick={(e) => postMeal()}>
                                Food: {selectedFoods[0]} 
                                Protein: {selectedFoods[1]} 
                                Fats: {selectedFoods[2]} 
                                Carbs: {selectedFoods[3]} 
                                kCal: {selectedFoods[4]}
                            </td>
                        </tr>
                    )
                })
>>>>>>> 8ea8ee9 (meal post)
            }
        </>
    )
}

export default DisplayMeal;