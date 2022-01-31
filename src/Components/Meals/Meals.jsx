import React, { useState, useEffect } from 'react';
import "../Meals/meals.css"
import Navbar from '../Navbar/Navbar';
import {
    Button,
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Table,
    Row
} from 'reactstrap'
import CreateMeal from '../Meals/CreateMeal/CreateMeal';
import DisplayTotals from './DisplayTotals/DisplayTotals';
import Breakfast from '../Assets/breakfast.jpg'
import Lunch from '../Assets/lunch.jpg'
import Dinner from '../Assets/dinner.jpg'
import Snack from '../Assets/snack.jpg'
import APIURL from '../../helpers/environment';

const Meals = (props) => {
    const [displayMeal, setDisplayMeal] = useState(false)
    const [mealCat, setMealCat] = useState(0)
    const [allMeals, setAllMeals] = useState({})
    const [userIdNow, setUserIdNow] = useState(1)

    const toggleModal = () => {
        setDisplayMeal(!displayMeal)
    }
    
    const createMealCat = (e) => {
        setMealCat(e.target.value)
    }

    const displayInRightSpot = (category) => {
        let arrayMeals = Object.entries(allMeals)
        // console.log(arrayMeals)
        return (
            arrayMeals.map((meal, key) => {
                if (meal[1].mealCat === category) {
                    // console.log(meal)
                    return (
                        <>
                            <tr style={{borderBottom: "solid 2px #547575", color: "black"}}>{meal[1].foodName}</tr>
                        </>
                    )
                }
            }))
    }

    const parseJwt = (token) => {
        if (!token) { 
            return(null); 
        } else {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        let userId = JSON.parse(window.atob(base64));
        return(userId)
    }}
    
    const fetchMeals = () => {
        
        const id = parseJwt(localStorage.token).id
        console.log(id)
        const url = `${APIURL}/meal/${id}`

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllMeals(data)})
        .catch(err => console.log(err))
    }

    // const deleteInRightSpot = (category) => {
    //     let arrayMeals = Object.entries(allMeals)
    //     console.log(arrayMeals)

    //         if (meal[1].mealCat === category) {
    //             // console.log(meal)
    //         }
    //     }

    const deleteMeal = (category) => {

        const deleteLast = (arr) => {
            let count = arr.length - 1;
            if (count < arr.length) {
                return arr[count]
            }
        }
        let mealId = Object.entries(allMeals)
        console.log(mealId);
        let lastMeal = deleteLast(mealId);
        let yessir = lastMeal[1].id;

        let url = `${APIURL}/meal/delete/${yessir}`

        fetch(url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
            })
            .then(res => res.json())
            .then(data => console.log("Deleted"))
            .then(fetchMeals())
            .then(displayInRightSpot(category))
            // .then(setAllMeals)
            .catch(err => console.log(err))
        };

    useEffect(() => {
        fetchMeals()
    }, [])

    return (
        <>
            <Navbar updateLocalStorage={props.updateLocalStorage} clearLocalStorage={props.clearLocalStorage} />
            <CardGroup>
                <Card 
                    id="breakfast" 
                    style={{
                        border: " solid 2px gray",
                        borderRadius: "3px",
                        margin: "1em"
                    }}>
                    <CardImg alt="breakfast" src={Breakfast} top width="100%" />
                    <CardBody
                        style={{background: "#8DB38B"}}>
                        <CardTitle tag="h2">
                            BREAKFAST
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            <div>
                                <Table style={{listStyle: "none"}}>
                                    {displayInRightSpot(1)}
                                </Table>
                            </div>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals} category={1}/>
                        </CardText>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Button
                                onClick={(e) => {setDisplayMeal(true); createMealCat(e)}}
                                value={1}
                                style={{margin: "1px 2px 1px 2px", width: "10em"}}
                                >Add Food Item
                            </Button>
                            {displayMeal ? <CreateMeal 
                                displayMeal={displayMeal} 
                                fetchMeals={fetchMeals} 
                                toggleModal={toggleModal} 
                                displayInRightSpot={displayInRightSpot} 
                                category={1} 
                                userIdNow={userIdNow} 
                                mealCat={mealCat} 
                                sessionToken={props.sessionToken} /> : null}
                        </div>
                    </CardBody>
                </Card>
                <Card 
                    id="breakfast" 
                    style={{
                        border: " solid 2px gray",
                        borderRadius: "3px",
                        margin: "1em"
                    }}>
                    <CardImg alt="Card image cap" src={Lunch} top width="100%" />
                    <CardBody
                        style={{background: "#8DB38B"}}>
                        <CardTitle tag="h2">
                            LUNCH
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            <Table>
                            {displayInRightSpot(2)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals} category={2}/>
                        </CardText>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Button
                                onClick={(e) => {setDisplayMeal(true); createMealCat(e)}}
                                value={2}
                                style={{margin: "1px 2px 1px 2px", width: "10em"}}
                                >Add Food Item
                            </Button>
                            {displayMeal ? <CreateMeal 
                                displayMeal={displayMeal} 
                                fetchMeals={fetchMeals} 
                                toggleModal={toggleModal} 
                                displayInRightSpot={displayInRightSpot} 
                                category={2} 
                                userIdNow={userIdNow} 
                                mealCat={mealCat} 
                                sessionToken={props.sessionToken} /> : null}
                        </div>
                    </CardBody>
                </Card>
                <Card 
                    id="breakfast" 
                    style={{
                        border: " solid 2px gray",
                        borderRadius: "3px",
                        margin: "1em"
                    }}>
                    <CardImg alt="Card image cap" src={Dinner} top width="100%" />
                    <CardBody
                        style={{background: "#8DB38B"}}>
                        <CardTitle tag="h2">
                            DINNER
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            <Table>
                            {displayInRightSpot(3)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals} category={3}/>
                        </CardText>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Button
                                onClick={(e) => {setDisplayMeal(true); createMealCat(e)}}
                                value={3}
                                style={{margin: "1px 2px 1px 2px", width: "10em"}}
                                >Add Food Item
                            </Button>
                            {displayMeal ? <CreateMeal 
                                displayMeal={displayMeal} 
                                fetchMeals={fetchMeals} 
                                toggleModal={toggleModal} 
                                displayInRightSpot={displayInRightSpot} 
                                category={3} 
                                userIdNow={userIdNow} 
                                mealCat={mealCat} 
                                sessionToken={props.sessionToken} /> : null}
                        </div>
                    </CardBody>
                </Card>
                <Card 
                    id="breakfast" 
                    style={{
                        border: " solid 2px gray",
                        borderRadius: "3px",
                        margin: "1em"
                    }}>
                <CardImg alt="Card image cap" src={Snack} top width="100%" />
                    <CardBody
                        style={{backgroundColor: "#8DB38B"}}
                    >
                        <CardTitle tag="h2">
                            SNACKS
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            <Table>
                            {displayInRightSpot(4)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals} category={4}/>
                        </CardText>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Button
                                onClick={(e) => {setDisplayMeal(true); createMealCat(e)}}
                                value={4}
                                style={{margin: "1px 2px 1px 2px", width: "10em"}}
                                >Add Food Item
                            </Button>
                            {displayMeal ? <CreateMeal 
                                displayMeal={displayMeal} 
                                fetchMeals={fetchMeals} 
                                toggleModal={toggleModal} 
                                displayInRightSpot={displayInRightSpot} 
                                category={4} 
                                userIdNow={userIdNow} 
                                mealCat={mealCat} 
                                sessionToken={props.sessionToken} /> : null}                        
                        </div>                    
                    </CardBody>
                </Card>
            </CardGroup>
            <div style={{
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center",
                    margin: "5px",
                    marginBottom: "5em"
                }}>
                <Button onClick={(e) => {deleteMeal()}}>Remove Last Entry</Button>
            </div>
        </>
    )
}

export default Meals;
