import React from 'react'
import styled from 'styled-components'

const ListDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
justify-content: center;

`

const NoResult = styled.h2`
padding-top: 30px;
height: 90vh;
`

function SearchFoodList({ searchResults }) {


  return (
    <ListDiv>
        {searchResults?.length ? searchResults.map((val) => {
            return <ListFormat key={val.id}> 
                        <h3>Name: {val.name}</h3>
                        <p>Type: {val.type}</p>
                        <p>Location: {val.location}</p>
                        <p>Recommendation: {val.recommendation}</p>
                        <p>Price: {val.price}</p>
                        <p>Rating: {val.rating >= 1 ? val.rating : '(Have not ate here yet)'}</p>
                        <p>Comments: {val.comments}</p>
            </ListFormat>
        }): <NoResult>No restaurants to display</NoResult>} 
      
    </ListDiv>
  )
}

export default SearchFoodList