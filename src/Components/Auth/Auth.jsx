import React, { useState, useEffect } from "react";
import './auth.css';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import RegisterModal from './RegisterModal'

const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);

    const loginSubmit = (event) => {
        event.preventDefault()

        let reqBody = {
            email,
            password
        }

        let url = "http://localhost:3333/user/login"

            fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(data => props.updateLocalStorage(data.token))
            .catch(err => console.log(err))
    }


    const registerSubmit = (event) => {
        event.preventDefault()

        let reqBody = {
            firstName,
            lastName,
            email,
            password
        }

        let url = "http://localhost:3333/user/register"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(data => {
                props.updateLocalStorage(data.token);
                setRegister(false)
            })
            .catch(err => console.log(err))

        }

        const showModal = () => setRegister(true);
        const closeModal = () => setRegister(false);



return (
    <div>
        <Form>
            <FormGroup>
                <Label for="loginPassword">
                    Email
                </Label>
                <Input
                    id="loginPassword"
                    name="email"
                    placeholder="email"
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
                    placeholder="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <Button onClick={(e) => { loginSubmit(e) }}>
                Submit
            </Button>
            <Button onClick={(e) => showModal}>
            Register
        </Button>
            {/* <RegisterModal email={email} password={password} registerSubmit={registerSubmit} firstName={firstName} lastName={lastName} /> */}
        </Form>
        <Modal
                show={register}
                onHide={closeModal}
            >
                <ModalHeader show={register} onHide={closeModal}>
                    Register
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">
                                First Name
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="loginPassword">
                                Email
                            </Label>
                            <Input
                                id="loginPassword"
                                name="email"
                                placeholder="email"
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
                                placeholder="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button
                            color="primary"
                            onClick={registerSubmit}
                        >
                            Register
                        </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    
                    {' '}
                    <Button onClick={closeModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
    </div>
)
}

export default Auth;