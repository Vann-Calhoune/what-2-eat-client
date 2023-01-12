import React, { useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const SearchForm = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
margin-top: 15px;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
gap: 10px;
padding: 20px;

> button {
  border-radius: 10px;
  background-color: crimson;
  color: white;
  padding: 3px;
}
> button:active {
  background-color: white;
}
> button:hover {
  cursor: pointer;
}
> select {
  border-radius: 10px;
  padding: 3px;
  text-align: center;
}
@media (max-width: 500px) {
  flex-direction: column;
  width: 200px;
  > button {
    width: 75px;
    margin: 0 auto;
  }


`
 

function RandomFood({ setRandomItem }) {

    const [searchType, setSearchType] = useState('');
    const [searchPrice, setSearchPrice] = useState('');
    const [searchRating, setSearchRating] = useState('');
    
    
    const chooseRandom = (e) => {
      e.preventDefault()
      Axios.get(`https://what-2-eat-server.herokuapp.com/random?type=${searchType}&price=${searchPrice}&rating=${searchRating}`)
      .then((response) => {
        setRandomItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
    }

  return (
    <SearchForm>
        <label>Type: </label>
        <select value={searchType} onChange={(e) => {
        setSearchType(e.target.value)
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
        <label>Price: </label>
        <select value={searchPrice} onChange={(e) => {
        setSearchPrice(e.target.value)
        }}><option></option> 
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
        </select>
        <label>Rating: </label>
        <select value={searchRating} onChange={(e) => {
        setSearchRating(e.target.value)
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
            <option>10</option>
        </select>
        <button onClick={chooseRandom}>Submit</button>
  </SearchForm>
  )
}

export default RandomFood