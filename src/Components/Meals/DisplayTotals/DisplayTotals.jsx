import React from "react";
import './displayTotals.css'

const DisplayTotals = (props) => {

    const addingFunction = (want) => {
        let added = 0
        let total = added += want
        return(total)
    }
    
    props.fetchFromServer.map((data, key) => {
            let totalProtein = addingFunction(props.data.protein)
            let totalCarbs = addingFunction(props.data.carbs)
            let totalFats = addingFunction(props.data.fats)
            let totalKCal = addingFunction(props.data.kCal)
            
    return(
        <>
        <h3>Total Protein: {totalProtein}</h3>
        <h3>Total Carbs: {totalCarbs}</h3>
        <h3>Total Fats: {totalFats}</h3>
        <h3>Total kCal: {totalKCal}</h3>
        </>
        )
    })


}

export default DisplayTotals