import { useState } from "react"
import Axios from 'axios'
import styled from "styled-components";

const EntryForm = styled.div`
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
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
> button {
    width: 15vw;
    margin: 0 auto;
    margin-top: 10px;
    background-color: crimson;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
> button: hover {
    cursor: pointer;
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
`



function FoodForm({ setFoodArray, foodArray}) {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const addRestaurant = (e) => {
       e.preventDefault()
        Axios.post('http://localhost:3001/create', {name: name, type: type, location: location, recommendation: recommendation, price: price, rating: rating, comments: comments
    }).then(() => {
        setFoodArray([...foodArray, {
            name: name, type: type, location: location, recommendation: recommendation, price: price, rating: rating, comments: comments
        }]);
        setName('');
        setType('');
        setLocation('');
        setRecommendation('');
        setPrice('');
        setRating(0);
        setComments('');
    });
   };

   

  return (
    <EntryForm >
        <label>Name:</label>
        <input value={name} type='text' onChange={(e) => {
            setName(e.target.value);
        }}></input>
        <label>Type:</label>
        <select value={type} onChange={(e) => {
            setType(e.target.value);
        }}><option></option> 
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
        <input value={location} type='text' onChange={(e) => {
            setLocation(e.target.value);
        }}></input>
        <label>Recommendation:</label>
        <input value={recommendation} type='text' onChange={(e) => {
            setRecommendation(e.target.value);
        }}></input>
        <label>Price:</label>
        <select value={price} type='text' onChange={(e) => {
            setPrice(e.target.value);
        }}><option></option> 
            <option>$</option>
            <option>$$</option>
            <option>$$$</option></select>
        <label>Rating(1-10):</label>
        <select value={rating} onChange={(e) => {
            setRating(e.target.value);
        }}><option></option> 
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option></select>
        <label>Comments:</label>
        <textarea value={comments} onChange={(e) => {
            setComments(e.target.value);
        }}></textarea>
        <button onClick={addRestaurant}>Submit</button>
    </EntryForm>
  )
}

export default FoodForm