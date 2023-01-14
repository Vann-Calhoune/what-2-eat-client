import React, { useEffect, useState } from "react"
import Axios from "axios";
import styled from "styled-components";
import exit from '../assets/delete.png'

const ListDiv = styled.div`

`

const Update = styled.div`
display: flex;
gap: 10px;
> input {
    border-radius: 10px;
    
}
> button {
    border-radius: 10px;
    background-color: blue;
    color: white;
}
> button: hover {
    cursor: pointer;
  }
`

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

function FoodList({setFoodArray , foodArray}) {

    const [newRating, setNewRating] = useState('');
    
    const updateFoodRating = (id) => {
        Axios.put("https://what-2-eat-server.herokuapp.com/update", { rating: newRating, id: id }).then((response) => {
            setFoodArray(foodArray.map((val) => {
                return val.id === id ? {id: val.id, name: val.name, type: val.type, location: val.location, recommendation: val.recommendation, price: val.price, rating: val.newRating, comments: val.comments} : val;
        }));
        }
       )
       setNewRating('');
    }

    const deleteFood = (id) => {
        Axios.delete(`https://what-2-eat-server.herokuapp.com/delete/${id}`).then(() => {
           setFoodArray(foodArray.filter((val) => {
            return val.id !== id
           })) 
        })
        .catch((error) => {
            console.error(error)
        });
    }
    

    const getFood = () => {
        Axios.get('https://what-2-eat-server.herokuapp.com/food').then((response) => {
        setFoodArray(response.data);
    });
    }

    useEffect(() => {
        getFood();
      }, [foodArray]);

  return (
    <ListDiv>
        {foodArray.map((val) => {
            return <ListFormat key={val.id}> 
                        <TopDiv key={val.id}>
                            <h3>Name: {val.name}</h3>
                            <img src={exit} alt='delete button' onClick={() => {
                                deleteFood(val.id)
                            }} />
                        </TopDiv>
                        <p>Type: {val.type}</p>
                        <p>Location: {val.location}</p>
                        <p>Food Recommendation: {val.recommendation}</p>
                        <p>Price: {val.price}</p>
                        <p>Rating: {val.rating}</p>
                        <p>Comments: {val.comments}</p>
                        <Update>
                            <input placeholder="New Rating" onChange={(e) => setNewRating(e.target.value)} type='text'/>
                            <button onClick={() => {updateFoodRating(val.id);}}>Update</button>
                        </Update>
            </ListFormat>
        })}
    </ListDiv>
  )
}

export default FoodList