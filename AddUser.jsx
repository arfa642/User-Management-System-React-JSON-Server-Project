import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './API_INTEGRATION.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState();
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState();


  const data = async () => {
    console.log(name, age, email, password)
    const url = 'http://localhost:3000/users';
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name, age, email, password })
    });
    response = await response.json();
    if (response) {
      alert('new user added')
    }
    console.log(response);
  }

  const handleNameError = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(value)) {
      setNameError('Please enter a valid name (letters only)');
    } else {
      setNameError('');
    }
  };
  const handleAgeError = (event) => {
    const value = event.target.value;
    const regex = /^[0-9]+$/;

    if (!regex.test(value)) {
      setAgeError('Please enter a valid age (numerics only)');
    } else {
      setAgeError('');
    }
  };
  const handleEmailError = (event) => {
    const value = event.target.value;
    const regex = /^[^@]+@[^@]+$/;

    if (!regex.test(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };


  const handlePasswordError = (event) => {
    const value = event.target.value;
    const size = value.length;

    if (size < 8) {
      setPasswordError('Password should contain atleast 8 characters');
    } else {
      setPasswordError('');
    }
  };


  return (
    <div style={{ textAlign: 'center', marginBottom: "100px" }} >
      <br /><br />
      <h1>Add new User</h1>
      <br /><br />
      <input 
        id="TB1"
        className= {nameError?'error':''}
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setName(event.target.value);
          handleNameError(event);
        }}
      />
      <br />
      <span style={{ color: 'red' }}>{nameError}</span>
      <br />
      <input
        id="TB2"
        className= {ageError?'error':''}
        type="text"
        placeholder="Enter Age"
        onChange={(event) => {
          setAge(event.target.value);
          handleAgeError(event);
        }}
      />
      <br />
      <span style={{ color: 'red' }}>{ageError}</span>
      <br />
      <input
        id="TB3"
        className= {emailError?'error':''}
        type="email"
        placeholder="Enter Email"
        onChange={(event) => {
          setEmail(event.target.value);
          handleEmailError(event);
        }}
      />
      <br />
      <span style={{ color: 'red' }}>{emailError}</span>
      <br />

      <input
        id="TB4"
        className= {passwordError?'error':''}
        type="password"
        placeholder="Enter Password"
        onChange={(event) => {
          setPassword(event.target.value);
          handlePasswordError(event);
        }}
      />
      <br />
      <span style={{ color: 'red' }}>{passwordError}</span>
      <br />

      <Button
        disabled={nameError || passwordError || ageError || emailError}
        onClick={data} >Submit</Button>
    </div >
  )
}

export default AddUser
