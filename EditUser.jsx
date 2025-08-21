import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import './API_INTEGRATION.css';
import { useNavigate, useParams } from 'react-router';

const EditUser = () => {
  
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState();
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState();

  const { id } = useParams();
  const url = "http://localhost:3000/users" + "/" + id;
  const navigateToHomepage = useNavigate();

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

  useEffect(() => {
    getResponse();
  }, [])

  const getResponse = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name)
    setAge(response.age)
    setEmail(response.email)
    setPassword(response.password)
  }

  const editData = async () => {
    let response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ name, age, email, password })
    });
    response = await response.json();
    console.log(response);
    alert("user data updated")
    navigateToHomepage("/");

  }

  return (
    <div style={{ textAlign: 'center', marginBottom: "100px" }} >
      <br /><br />
      <h1>Edit Details</h1>
      <br /><br />
      <input value={name}
        onChange={(event) => {
          setName(event.target.value);
          handleNameError(event)
        }}
        id="TB5"
        className={nameError ? 'error' : ''}
        type="text"
        placeholder='Enter Name' />
      <br /> 
      <span style={{ color: 'red' }}>{nameError}</span>
      <br />
      <input value={age}
        onChange={(event) => {
          setAge(event.target.value)
          handleAgeError(event)
        }}
        id="TB6"
        className={ageError ? 'error' : ''}
        type='text'
        placeholder='Enter Age' />
      <br />
      <span style={{ color: 'red' }}>{ageError}</span>
      <br />
      <input value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          handleEmailError(event)
        }}
        id="TB7"
        className={emailError ? 'error' : ''}
        type='text'
        placeholder='Enter Email' />
      <br />
      <span style={{ color: 'red' }}>{emailError}</span>
      <br />
      <input value={password}
        onChange={(event) => {
          setPassword(event.target.value)
          handlePasswordError(event)
        }}
        id="TB8"
        className={passwordError ? 'error' : ''}
        type="password"
        placeholder='Enter Password' />
      <br /> 
      <span style={{ color: 'red' }}>{passwordError}</span>
      <br />

      <Button onClick={editData} >Save</Button>
    </div >
  )
}

export default EditUser
