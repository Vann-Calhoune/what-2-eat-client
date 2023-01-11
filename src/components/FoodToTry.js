import styled from "styled-components";
import Axios from "axios";
import { useState } from "react";

const EntryForm = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 300px;
gap: 5px;
padding-bottom: 20px;
// border: 1px solid black;
margin: 10px;
margin-bottom: 20px;
padding: 10px;
border-radius: 10px;

box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;> button {
    width: 15vw;
    margin: 0 auto;
    margin-top: 10px;
    background-color: crimson;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
> input, select {
    border-radius: 10px;
    height: 30px;
    padding: 3px;
}
> textarea {
    border-radius: 10px;
    height: 50px;
    padding: 5px;
}
> label {
    font-size: 12px;
}
> button: hover {
    cursor: pointer;
  }
`


function FoodToTry({setNewFoodArray , newFoodArray}) {

    const [newName, setNewName] = useState('');
    const [newType, setNewType] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newComments, setNewComments] = useState('');


    const addNewRestaurant = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/newcreate', {name: newName, type: newType, location: newLocation, price: newPrice, comments: newComments
    }).then(() => {
        setNewFoodArray([...newFoodArray, {
            name: newName, type: newType, location: newLocation, price: newPrice, comments: newComments
        }]);
    });
    }

  return (
    <EntryForm>
        <label>Name:</label>
        <input value={newName} type='text' onChange={(e) => {
            setNewName(e.target.value);
        }}></input>
        <label>Type:</label>
        <select value={newType} onChange={(e) => {
            setNewType(e.target.value);
        }}> <option></option>  
        <option>Other</option>
            <option>American</option>
            <option>BBQ</option>
            <option>Burgers</option>
            <option>Chicken</option>
            <option>Chinese</option>
            <option>Indian</option>
            <option>Jamaican</option>
            <option>Pizza</option>
            <option>Subs</option>
            <option>Tacos</option>
            <option>Thai</option>
            </select>
        <label>Location:</label>
        <input value={newLocation} type='text' onChange={(e) => {
            setNewLocation(e.target.value);
        }}></input>
        <label>Price:</label>
         <select value={newPrice} type='text' onChange={(e) => {
            setNewPrice(e.target.value);
        }}><option></option> 
            <option>$</option>
            <option>$$</option>
            <option>$$$</option></select>
        <label>Comments:</label>
        <textarea value={newComments} onChange={(e) => {
            setNewComments(e.target.value);
        }}></textarea>
        <button onClick={addNewRestaurant}>Submit</button>
    </EntryForm>
  )
}

export default FoodToTry