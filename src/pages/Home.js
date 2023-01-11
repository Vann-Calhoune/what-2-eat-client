import React, { useState } from 'react'
import FoodForm from '../components/FoodForm'
import FoodList from '../components/FoodList'
import styled from 'styled-components';
import FoodToTry from '../components/FoodToTry';
import NewFoodList from '../components/NewFoodList';


const HomeTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 30px;
gap: 20px;
background-color: #FDF5DF;

`
const HomeBottom = styled.div`
display: flex;
justify-content: center;
padding-top: 20px;
background-color: #FDF5DF;

`
const ViewButton = styled.button`
border-radius: 10px;
padding: 5px;
background-color: crimson;
color: white;
`



const ButtonContainer = styled.div`
display: flex;
justify-content: center;
background-color: #FDF5DF;
padding: 20px;
gap: 20px;
> button: hover {
  cursor: pointer;
}
> button:active {
  background-color: white;
}

`


 


function Home() {

  const [view, setView] = useState(true)

  const [foodArray, setFoodArray] = useState([]);

  const [newFoodArray, setNewFoodArray] = useState([]);
  
  return (
    <div>
      <ButtonContainer>
        <ViewButton onClick={() => setView(true)}>Rate a Restaurant</ViewButton>
        <ViewButton onClick={() => setView(false)}>Add a Restaurant to Try</ViewButton>
      </ButtonContainer>
      { view ? <>
              <HomeTop>
                 <h1>Rate a Restaurant</h1> 
                <FoodForm setFoodArray={setFoodArray} foodArray={foodArray}/>
              </HomeTop> 
              <HomeBottom>    
                <FoodList setFoodArray={setFoodArray} foodArray={foodArray}/>
              </HomeBottom></> : <>
              
              <HomeTop>
              <h1>Add a New Restaurant</h1>
              <FoodToTry setNewFoodArray={setNewFoodArray} newFoodArray={newFoodArray} />
              </HomeTop><HomeBottom><NewFoodList setNewFoodArray={setNewFoodArray} newFoodArray={newFoodArray}/></HomeBottom></> }
  </div>
    
  )
}

export default Home