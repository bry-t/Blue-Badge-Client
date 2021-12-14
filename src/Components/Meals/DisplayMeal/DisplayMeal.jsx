import React from "react";
import './displayMeal.css'

const DisplayMeal = (props) => {

    const 


    return(
        <>
            <h2>Foods</h2>
            {
            props.foods.map((pies, key) => {
                    return(
                        <tr key={key}>
                            <td>{pies.nameOfPie}</td>
                            <td>{pies.baseOfPie}</td>
                            <td>{pies.crust}</td>
                            <td>{pies.timeToBake}</td>
                            <td>{pies.servings}</td>
                            <td>{pies.rating}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default DisplayMeal;