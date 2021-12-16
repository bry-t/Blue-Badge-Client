import React, {useState, useEffect} from "react";
import './displayTotals.css'

const DisplayTotals = (props) => {

    const [totalProtein, setTotalProtein] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [totalFats, setTotalFats] = useState(0)
    const [totalKCal, setTotalKCal] = useState(0)


    
    
    const doAnotherThing = () => {
        // const arrayMeals = Object.entries(props.allMeals)
        
        const addingFunction = (want) => {
            let added = 0
            let total = added += want
            return(total)
        }
        console.log(arrayMeals)
        // arrayMeals.map((data, key) => {
            setTotalProtein(addingFunction(data[1].protein))
            setTotalCarbs(addingFunction(data[1].carbs))
            setTotalFats(addingFunction(data[1].fats))
            setTotalKCal(addingFunction(data[1].kCal))
    })}

    useEffect(()=>{
        doAnotherThing()
    }, [props])

    return(
        <>
        <h3>Total Protein: {totalProtein}</h3>
        <h3>Total Carbs: {totalCarbs}</h3>
        <h3>Total Fats: {totalFats}</h3>
        <h3>Total kCal: {totalKCal}</h3>
        </>
        )


}

export default DisplayTotals