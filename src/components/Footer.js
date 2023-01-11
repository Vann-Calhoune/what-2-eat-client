import styled from "styled-components"

const FooterBar = styled.div`
position: relative;
bottom: 0;
width: 100vw;
background-color: #FDF5DF;
padding: 20px 20px;


`

function Footer() {
  return (
    <FooterBar>Est. 2023</FooterBar>
  )
}

export default Footer