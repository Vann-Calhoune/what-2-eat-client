import React, { useEffect, useState } from "react"
import Axios from "axios"
import styled from "styled-components"
import exit from '../assets/delete.png'

const ListFormat = styled.div`
border: 1px solid black;
margin: 10px;
display: flex;
flex-direction: column;
padding: 15px;
border-radius: 10px;
background-color: white;
width: 300px;
gap: 10px;

`

const TopDiv = styled.div`
display: flex;
justify-content: space-between;
> img {
    height: 30px;
}
> img: hover {
  cursor: pointer;
}
`


function NewFoodList({setNewFoodArray , newFoodArray}) {

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/newdelete/${id}`).then(() => {
       setNewFoodArray(newFoodArray.filter((val) => {
        return val.id !== id
       })) 
    })
    .catch((error) => {
        console.error(error)
    });
  }
  
  
  const getFood = () => {
    Axios.get('http://localhost:3001/newfood').then((response) => {
    setNewFoodArray(response.data);
  });
  }
  
  useEffect(() => {
    getFood();
  }, [newFoodArray]);

  return (
    <div>
        {newFoodArray.map((val) => {
            return <ListFormat key={val.id}> 
                        <TopDiv key={val.id}>
                            <h3>Name: {val.name}</h3>
                            <img src={exit} alt="delete button" onClick={() => {
                                deleteFood(val.id)
                            }} />
                        </TopDiv>
                        <p>Type: {val.type}</p>
                        <p>Location: {val.location}</p>
                        <p>Price: {val.price}</p>
                        <p>Comments: {val.comments}</p>
            </ListFormat>
        })}
    </div>
  )
}

export default NewFoodList