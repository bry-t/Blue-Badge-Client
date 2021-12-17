import React, { useState, useEffect } from "react";
import './auth.css';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import ReactForm from "./RegisterForm";
import APIURL from "../../helpers/environment";

const Auth = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState(false);


    const loginSubmit = (event) => {
        event.preventDefault()

        let reqBody = {
            email,
            password
        }

        let url = `${APIURL}/user/login`
        console.log(reqBody)

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(data => props.updateLocalStorage(data.sessionToken))
            .catch(err => console.log(err))
    }

    const handleShow = () => setShow(true);

    const toggleFunction = () => {
        setShow(!show)
    }


    const ModalIsShowing = (e) => {
        return (
            <Modal isOpen={show} toggle={toggleFunction} >
                <ModalHeader toggle={toggleFunction}>
                    Register
                </ModalHeader>
                <ModalBody>
                    <ReactForm toggleFunction={toggleFunction} show={show} updateLocalStorage={props.updateLocalStorage}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleFunction}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }


    console.log(show)
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", justifyContent: "center", width: "25em"}}>
                <Form style={{width: "18em"}}>
                    <FormGroup>
                        <Label for="loginEmail">
                            Email
                        </Label>
                        <Input
                            id="loginEmail"
                            name="email"
                            placeholder="example@email.com"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="loginPassword">
                            Password
                        </Label>
                        <Input
                            id="loginPassword"
                            name="password"
                            placeholder=""
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button onClick={(e) => { loginSubmit(e) }} style={{margin: "2px 5px"}}>
                            Login
                        </Button>
                        <Button onClick={handleShow} style={{margin: "2px 5px"}}>
                            Register
                        </Button>
                    </div>
                </Form>
                {show === true ? <ModalIsShowing /> : <></>}
            </div>
        </div>
    )
}

export default Auth;