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
                return(
                    <>
                    <Row>{meal}</Row>
                    </>
                    )
            }

        }))
    }

    const fetchMealData = () => {

        const parseJwt = (token) => {
            if (!token) { 
                return(null); 
            } else {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            let userId = JSON.parse(window.atob(base64));
            return(userId)
        }}

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
            <CardGroup style={{display: 'flex', justifyContent: 'center', margin: '2px'}}>
                <Card style={{margin: '5px', borderRadius: '5px'}}>
                    <CardImg
                        alt="Card image cap"
                        src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        top
                        width="100%"
                        height="300px"
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
                            {/* {<DisplayFoods/>} */}


                        </CardSubtitle>
                        <CardText>
                            {/* <DisplayTotals /> */}
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={1} >Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
                    </CardBody>
                </Card>
                <Card style={{margin: '5px', borderRadius: '5px'}}>
                    <CardImg
                        alt="Card image cap"
                        src="https://images.unsplash.com/photo-1576866206283-f61fbffc7da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
                        top
                        width="100%"
                        height="300px"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            LUNCH
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={2}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
                    </CardBody>
                </Card>
                <Card style={{margin: '5px', borderRadius: '5px'}}>
                    <CardImg
                        alt="Card image cap"
                        src="https://images.unsplash.com/photo-1555178897-7774373fbe9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        top
                        width="100%"
                        height="300px"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            DINNER
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={3}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
                    </CardBody>
                </Card>
                <Card style={{margin: '5px', borderRadius: '5px'}}>
                    <CardImg
                        alt="Card image cap"
                        src="https://images.unsplash.com/photo-1559852925-a9b83b8387d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        top
                        width="100%"
                        height="300px"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        SNACKS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button onClick={(e) => {setDisplayMeal(true); createMealCat(e)}} value={4}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    )
}

export default Meals;

// .then(data => {
//     for(let i = 0; i > data.foods.length; i++) {
//         const foodNutro = data.foods[i].foodNutrition;
//         for(let j = 0; j > foodNutro.length; i++) {
//             const nutrientId = foodNutro[j].nutrientId;
            
//         }
//     }
//     console.log(foodNutro)
// })