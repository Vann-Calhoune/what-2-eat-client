import React, { useState } from 'react'
import styled from 'styled-components'
import RandomFood from '../components/RandomFood'
import RandomItem from '../components/RandomItem'

const RandomDiv = styled.div`
text-align: center;
padding: 10px;
background-color: #FDF5DF;
`

function Random() {

  const [randomItem, setRandomItem] = useState([])

  return (
    <RandomDiv>
      <h1>Get a Random Restaurant</h1>
      <RandomFood randomItem={randomItem} setRandomItem={setRandomItem} />
      <RandomItem randomItem={randomItem} setRandomItem={setRandomItem}/>
    </RandomDiv>  
  )
}

export default Random