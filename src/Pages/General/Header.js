import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
import logo from '../../Images/nojusticenopeace.png'

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 9fr;
  grid-template-rows: 100%;
  grid-template-areas: "LogoSpace NavBarSpace";
  height: 100%;
  width: auto;
  background-color: #3d5a80;
  align-items: center;
  justify-content: center;
`;

const LogoPicture = styled.img`
height:25vw;
max-height:160px;
margin-left:3vw;
`

const LogoSpaceWrapper = styled.div`
  grid-area: LogoSpace;
`;

const NavBarWrapper = styled.div`
  grid-area: NavBarSpace;
  /* background-color: white; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 15px;
`;

const StyledNavLink = styled(NavLink)`
  background-color: #98c1d9;
  padding: 7px 10px 10px 10px;
  border-radius:20px;
  margin: 7px;
  text-decoration: none;
  color: #293241;
`
function NavBarItem(props) {
    return(
        <StyledNavLink to={props.path} activeStyle={{backgroundColor:"white"}}>
            {props.name}
        </StyledNavLink>
    )

}


function Header() {
  return (
    <HeaderWrapper>
      <LogoSpaceWrapper>
          <LogoPicture src={logo}/>
      </LogoSpaceWrapper>
      <NavBarWrapper>
        <NavBarItem path="/Home" name="Home"></NavBarItem>
        <NavBarItem path="/Donate" name="Donate"></NavBarItem>
        <NavBarItem path="/AboutUs" name="About Us"></NavBarItem>
        <NavBarItem path="/TakeQuiz" name="Take Quiz"></NavBarItem>
      </NavBarWrapper>
    </HeaderWrapper>
  );
}

export default Header;
