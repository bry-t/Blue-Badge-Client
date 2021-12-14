import React, { useState, useEffect } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table
} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css";
import DisplayFoods from '../DisplayFoods/DisplayFoods';

const CreateMeal = (props) => {
    const [protein, newProtein] = useState(0)
    const [carbs, newCarbs] = useState(0)
    const [fats, newFats] = useState(0)
    const [kCal, newKCal] = useState(0)

    const[foods, newFoods] = useState([])
    const[foodInput, newFoodInput] = useState('')

    const fetchMeals = async () => {
        const apiKey = process.env.REACT_APP_API_KEY
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${foodInput}`
        await fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
            .then(res => res.json()) 
            .then(data => newFoods(data.foods))              
            .catch(err => console.log(err))
            
    }
    console.log(foods);

    // someFunction = () => {
    //     fetch(url, {
    //         type: "POST"
    //     }).then ()
    //     .then( props.toggleModal)
    // }

    
    useEffect(() => {
        
    },[])


    return (
        <div>
            <Modal size="m"
                isOpen={props.displayMeal}
                toggle={props.toggleModal}
            >
                <ModalHeader toggle={props.toggleModal}>
                    Search for a food:
                </ModalHeader>
                <ModalBody>
                        {/* {(foods === []) ? <input type="text" onChange={(e) => newFoodInput(e.target.value)} /> : <Table>{<DisplayFoods foods={foods} />}</Table>} */}
                        <input type="text" onChange={(e) => newFoodInput(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={fetchMeals}
                    >
                        Submit
                    </Button>
                    {' '}
                    <Button onClick={props.toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateMeal;