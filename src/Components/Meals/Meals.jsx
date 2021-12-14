import React, { useState, useEffect } from 'react';
import "../Meals/meals.css"
import { 
    Button,
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap'
import CreateMeal from '../Meals/CreateMeal/CreateMeal';

const Meals = (props) => {
    const [displayMeal, setDisplayMeal] = useState(false)


    const toggleModal = () => {
        setDisplayMeal(!displayMeal)
    }


    return (
        <>
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
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button onClick={() => setDisplayMeal(true)}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
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
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button onClick={() => setDisplayMeal(true)}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
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
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button onClick={() => setDisplayMeal(true)}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
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
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button onClick={() => setDisplayMeal(true)}>Add Food Item</Button>
            {displayMeal ? <CreateMeal displayMeal={displayMeal} toggleModal={toggleModal} /> : null}
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    )
}

export default Meals;