import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/foodLogo.png'
import menu from '../assets/menu.png'


const Logo = styled.img`
width: 150px;
height: 150px;
padding-top: 15px;
z-index: 5;
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FDF5DF;
width: 100vw;
padding: 10px;
height: 15vh;
font-size: 20px;
`

const Menu = styled.img`
@media (min-width: 600px) {
  display: none;
}
position: absolute;
top: 40px;
z-index: 500;
:hover {
  cursor: pointer;
}


`
const RightSide = styled.div`
display: flex;
@media (max-width: 600px) {
  padding-right: 80px;
}
`


const LeftSide = styled.div`
z-index: 500;
`

const StyleLink = styled(Link)`
color: black;
text-decoration: none;
@media (max-width: 600px) {
  font-size: 24px;
}

`

const LinkDiv = styled.div`
display: flex;
gap: 20px;
padding-right: 20px;
// border: 1px solid black;
@media (max-width: 600px) {
flex-direction: column;
justify-content: space-around;
 position: absolute;
 left: 0px;
 width: 100vw;
 text-align: center;
 height: 220px;
 background-color: #FDF5DF;
 transition: 0.3s;
 box-shadow: 0 4px 2px -2px gray;
}
`

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    top: isOpen ? '120px' : '-300px'
  };


  

  return (
    <NavBar className='navBar'>
      <LeftSide>
        <Logo src={logo} alt='what to eat logo'/>
      </LeftSide>
      <RightSide>
        <Menu onClick={() => {setIsOpen(!isOpen)}} src={menu} alt='hamburger menu' />
        <LinkDiv style={navStyle}>
          <StyleLink onClick={() => {setIsOpen(!isOpen)}} className='navLink' to='/'>Home</StyleLink>
          <StyleLink onClick={() => {setIsOpen(!isOpen)}}className='navLink'  to='/Search'>Search</StyleLink>
          <StyleLink onClick={() => {setIsOpen(!isOpen)}}className='navLink'  to='/Random'>Random</StyleLink>
        </LinkDiv>
      </RightSide>  
    </NavBar>
  )
}

export default Navbar