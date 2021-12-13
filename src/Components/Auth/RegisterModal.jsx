// import React from "react"
// import './register.css'
// import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const RegisterModal = (props) => {
//     return (
//         <>
//         <Button onClick={(e) => setRegister(true)}>
//             Register
//         </Button>

//         <Modal
//                 show={setRegister(true)}
//                 onHide={setRegister(false)}
//             >
//                 <ModalHeader show={setRegister(true)} onHide={setRegister(false)}>
//                     Register
//                 </ModalHeader>
//                 <ModalBody>
//                     <Form>
//                         <FormGroup>
//                             <Label for="firstName">
//                                 First Name
//                             </Label>
//                             <Input
//                                 id="firstName"
//                                 name="firstName"
//                                 placeholder="First Name"
//                                 type="text"
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="lastName">
//                                 First Name
//                             </Label>
//                             <Input
//                                 id="lastName"
//                                 name="lastName"
//                                 placeholder="Last Name"
//                                 type="text"
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="loginPassword">
//                                 Email
//                             </Label>
//                             <Input
//                                 id="loginPassword"
//                                 name="email"
//                                 placeholder="email"
//                                 type="email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="loginPassword">
//                                 Password
//                             </Label>
//                             <Input
//                                 id="loginPassword"
//                                 name="password"
//                                 placeholder="password"
//                                 type="password"
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </FormGroup>
//                         <Button
//                             color="primary"
//                             onClick={registerSubmit}
//                         >
//                             Register
//                         </Button>
//                     </Form>
//                 </ModalBody>
//                 <ModalFooter>
                    
//                     {' '}
//                     <Button onClick={setRegister(false)}>
//                         Cancel
//                     </Button>
//                 </ModalFooter>
//             </Modal>
//         </>
//     )
// }

// export default RegisterModal;
