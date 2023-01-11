import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/foodLogo.png'

const ListStyle = styled.ul`
list-style: none;
display: flex;
justify-content: flex-end;
gap: 30px;
padding: 0 30px;
`
const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}

const Logo = styled.img`
width: 150px;
height: 150px;
padding-top: 15px;
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

function Navbar() {
  return (
    <NavBar>
      <Logo src={logo} alt='what to eat logo'/>
      <ListStyle>
        <li><Link style={linkStyle} to='/'>Home</Link></li>
        <li><Link style={linkStyle} to='/List'>List</Link></li>
        <li><Link style={linkStyle} to='/Random'>Random</Link></li>
      </ListStyle>  
    </NavBar>
  )
}

export default Navbar