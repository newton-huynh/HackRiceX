import styled, { css } from "styled-components";

import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import PageRouting from "../../Routing.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import FUTURA from "../../Fonts/FUTURA.ttf";

const Primary = css`
  @font-face {
    font-family: "FUTURA";
    src: url("../../Fonts/FUTURA.ttf");
  }
  font-family: "FUTURA", sans-serif;
`;
const GeneralPageWrapper = styled.div`
  ${Primary}
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 82vh 8vh;
  grid-template-areas:
    "headerSpace"
    "mainDisplay"
    "footer";

overflow: hidden;
`;

const HeaderWrapper = styled.div`
  grid-area: headerSpace;
  background-color: red;
  overflow: hidden;
`;

const MainDisplayWrapper = styled.div`
  grid-area: mainDisplay;
  background-color: yellow;
  overflow: auto;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  background-color: #3d5a80;
  overflow: hidden;
`;

function GeneralPageContainer() {
  return (
    <Router>

    <GeneralPageWrapper>
      <HeaderWrapper>  <Header/> </HeaderWrapper>
      <MainDisplayWrapper><PageRouting/></MainDisplayWrapper>
      <FooterWrapper> <Footer /> </FooterWrapper>
    </GeneralPageWrapper>

    </Router>
  );
}

export default GeneralPageContainer;
