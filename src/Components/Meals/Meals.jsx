import React, { useState, useEffect } from 'react';
import "../Meals/meals.css"
import {
    CardGroup,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
} from 'reactstrap'

// import CreateMeal from './CreateMeal/CreateMeal';

const Meals = (props) => {

    const[meals, setMeals] = useState([])
    const[displayMeal, setDisplayMeal] = useState(false)

    const fetchMeals = () => {
        const apiKey = 'LW8AOgBbdNG1aaAfjYpJvcKiNPBH30oLkJmC08lu'
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=chicken`

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchMeals();
    }, [displayMeal])

    const buttonHandler = () => setDisplayMeal(!displayMeal)

    return (
        <>
            {/* {displayMeal ? <CreateMeal sessionToken={props.sessionToken} displayMeal={setDisplayMeal} /> : null}
            {displayMeal ? <button onClick={buttonHandler}>Add Food Item</button> : null} */}

            <CardGroup>
                <Col md="6">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            BREAKFAST
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            {/* {setMeals(data)} */}
                        </CardText>
                        <Button>
                            Add Food Item
                        </Button>
                    </CardBody>
                </Card>
                </Col>
                <Card>
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
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
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
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
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
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    )
}

export default Meals;