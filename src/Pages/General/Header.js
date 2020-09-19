import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 100%;
  grid-template-areas: "LogoSpace NavBarSpace";
  height: 100%;
  width: 100%;
  background-color: pink;
  align-items: center;
  justify-content: center;
`;

const LogoSpaceWrapper = styled.div`
  grid-area: LogoSpace;
  background-color: red;
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
background-color: skyblue;
padding: 7px 10px 10px 10px;
border-radius:20px;
margin: 7px;
`
function NavBarItem(props) {
    return(
        <StyledNavLink to={props.path}>
            {props.name}
        </StyledNavLink>
    )

}


function Header() {
  return (
    <HeaderWrapper>
      <LogoSpaceWrapper>Logo</LogoSpaceWrapper>
      <NavBarWrapper>
        <NavBarItem path="/" name="Home"></NavBarItem>
        <NavBarItem path="/Donate" name="Donate"></NavBarItem>
        <NavBarItem path="/AboutUs" name="About Us"></NavBarItem>
        <NavBarItem path="/TakeQuiz" name="Take Quiz"></NavBarItem>
      </NavBarWrapper>
    </HeaderWrapper>
  );
}

export default Header;
