import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
    const [passwordError, setPasswordError] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at list two uppercase')
            return;
        }if(password.length<6){
            setPasswordError('Please enter minimum 6 characters')
            return;
        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error =>{
            console.error('error', error);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p className="text-danger">{passwordError}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;