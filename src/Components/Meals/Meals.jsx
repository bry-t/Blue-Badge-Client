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
                    console.log(meal)
                    return (
                        <>
                            <Row>Food {meal[1].foodName}</Row>
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
        const url = `http://localhost:${process.env.REACT_APP_PORT}/user/${id}`

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

    const deleteMeal = () => {

        const id = parseJwt(localStorage.token).id

        let url = `http://localhost:${process.env.REACT_APP_PORT}/meal/delete/${id}`

        fetch(url, {
            method: "DELETE",
            // body: JSON.stringify(props.mealId),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
            })
            .then(res => res.json())
            .then(data => console.log("Deleted"))
            .catch(err => console.log(err))
        };

    useEffect(() => {
        fetchMeals()
    }, [])

    return (
        <>
            <Navbar updateLocalStorage={props.updateLocalStorage} clearLocalStorage={props.clearLocalStorage} />
            <CardGroup>
                <Card id="breakfast">
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">
                            BREAKFAST
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            <Table>
                                {displayInRightSpot(1)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals} />
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={1} >Add Food Item</Button>
                        {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken} /> : null}
                        <Button onClick={(e) => {deleteMeal()}}>Remove Totals</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">
                            LUNCH
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            <Table>
                            {displayInRightSpot(1)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals} />
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={2}>Add Food Item</Button>
                        {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken}/> : null}
                        <Button onClick={(e) => {deleteMeal()}}>Remove Totals</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">
                            DINNER
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            <Table>
                            {displayInRightSpot(1)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals}/>
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={3}>Add Food Item</Button>
                        {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken}/> : null}
                        <Button onClick={(e) => {deleteMeal()}}>Remove Totals</Button>
                    </CardBody>
                </Card>
                <Card>
                <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">
                            SNACKS
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            <Table>
                            {displayInRightSpot(1)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            <DisplayTotals allMeals={allMeals}/>
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={4}>Add Food Item</Button>
                        {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken}/> : null}
                        <Button onClick={(e) => {deleteMeal()}}>Remove Totals</Button>                    
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    )
}

export default Meals;
