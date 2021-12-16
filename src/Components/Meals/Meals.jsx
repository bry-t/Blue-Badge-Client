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

const Meals = (props) => {
    const [displayMeal, setDisplayMeal] = useState(false)
    const [mealCat, setMealCat] = useState(0)
    const [allMeals, setAllMeals] = useState([])
    const [userIdNow, setUserIdNow] = useState(1)


    const toggleModal = () => {
        setDisplayMeal(!displayMeal)
    }

    const createMealCat = (e) => {
        setMealCat(e.target.value)
    }

    const displayInRightSpot = (category) => {
        return (
            allMeals.map((meal, key) => {
                if (meal.mealCat === category) {
                    return (
                        <>
                            <Row>{meal}</Row>
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
        const url = `http://localhost:${process.env.REACT_APP_POST}/meals/user/${id}`

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json"
            })
                .then(res => res.json())
                .then(data => setAllMeals(data))
                .catch(err => console.log(err))
        })
    }

    return (
        <>
            <Navbar updateLocalStorage={props.updateLocalStorage} clearLocalStorage={props.clearLocalStorage} />
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            BREAKFAST
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <Table>
                                {displayInRightSpot(1)}
                            </Table>
                        </CardSubtitle>
                        <CardText>
                            {/* <DisplayTotals /> */}
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={1} >Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken} /> : null}
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            LUNCH
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                            
                        </CardSubtitle>
                        <CardText>
                            {/* <DisplayTotals /> */}
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={2}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken}/> : null}
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            DINNER
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                        </CardSubtitle>
                        <CardText>
                            {/* <DisplayTotals /> */}
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={3}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken}/> : null}
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            SNACKS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                        </CardSubtitle>
                        <CardText>
                            {/* <DisplayTotals /> */}
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={4}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} userIdNow={userIdNow} mealCat={mealCat} sessionToken={props.sessionToken}/> : null}
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    )
}

export default Meals;