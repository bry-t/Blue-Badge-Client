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
    const[nutroArr, setNutroArr] = useState([])

    const fetchMeals = async () => {
        let urlFoodInput = foodInput.replace(" ", "%20")
        console.log(urlFoodInput);
        const apiKey = process.env.REACT_APP_API_KEY
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${urlFoodInput}`

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
    const setNames = (data) => {
        for(let i=4; i < data.length; i--) {
            let nutritionArr = data[i].foodNutrients;
            // console.log(nutritionArr);
            // let nutroArr = [];
            for(let j=0; j < nutritionArr.length; j++) {
                if(nutritionArr[j].nutrientId === 1003) {
                    let proVal = nutritionArr[j].value
                    newProtein(proVal)
                    console.log("Protein:", proVal);
                }
                if(nutritionArr[j].nutrientId === 1005) {
                    let carbVal = nutritionArr[j].value
                    newCarbs(carbVal)
                    console.log("Carb:", carbVal);
                }
                if(nutritionArr[j].nutrientId === 1004) {
                    let fatVal = nutritionArr[j].value
                    newFats(fatVal)
                    console.log("Fat:", fatVal);
                }
                if(nutritionArr[j].nutrientId === 1008) {
                    let cal = nutritionArr[j].value
                    newKCal(cal)
                    console.log("KCal", cal);
                }
                // nutroArr.push(proVal, carbVal, fatVal, cal)
                // console.log(nutroArr);
            }
        }
    }
    console.log(setNames(foods))
    // console.log(protein);
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