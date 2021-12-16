import React, {useState, useEffect} from "react";
import './displayTotals.css'

const DisplayTotals = (props) => {

    const [totalProtein, setTotalProtein] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [totalFats, setTotalFats] = useState(0)
    const [totalKCal, setTotalKCal] = useState(0)

    const doAnotherThing = () => {
        const arrayMeals = Object.entries(props.allMeals)
        

        // console.log(arrayMeals)
        arrayMeals.map((data, key) => {
            if (data[1].mealCat === props.category) {
            setTotalProtein(prevProtein =>(prevProtein + data[1].protein))
            setTotalCarbs(prevCarbs =>(prevCarbs + data[1].carbs))
            setTotalFats(prevFats =>(prevFats + data[1].fats))
            setTotalKCal(prevKCal =>(prevKCal + data[1].kCal))
            }
        })}

    useEffect(()=>{
        doAnotherThing()
    }, [props.allMeals])

    return(
        <>
        <h3>Total Protein: {Math.floor(totalProtein)}</h3>
        <h3>Total Carbs: {Math.floor(totalCarbs)}</h3>
        <h3>Total Fats: {Math.floor(totalFats)}</h3>
        <h3>Total kCal: {Math.floor(totalKCal)}</h3>
        </>
        )
}

export default DisplayTotals