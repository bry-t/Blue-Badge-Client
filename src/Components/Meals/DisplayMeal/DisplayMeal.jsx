import React from "react";
import './displayMeal.css'

const DisplayMeal = (props) => {

    return(
        <>
            {
            props.selectedFoods.map((selectedFoods, key) => {
                    return(
                        <tr key={key}>
                            <td>Food: {selectedFoods.foodName} Protein: {selectedFoods.protien} Carbs: {selectedFoods.carbs} Fats: {selectedFoods.fats} kCal: {selectedFoods.kCal}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default DisplayMeal;