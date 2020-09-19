import styled from "styled-components";

import React from "react";
import Header from './Header.js';
import PageRouting from '../../Routing.js';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const GeneralPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 110vh 8vh;
  grid-template-areas:
    "headerSpace"
    "mainDisplay"
    "footer";
`;

const HeaderWrapper = styled.div`
  grid-area: headerSpace;
  background-color: red;
`;

const MainDisplayWrapper = styled.div`
  grid-area: mainDisplay;
  background-color: yellow;
  font-size: 200px;
  text-align: center;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  background-color: green;
`;

function GeneralPageContainer() {
  return (
      <Router>
    <GeneralPageWrapper>
      <HeaderWrapper>  <Header/> </HeaderWrapper>
      <MainDisplayWrapper> <PageRouting/> </MainDisplayWrapper>
      <FooterWrapper> </FooterWrapper>
    </GeneralPageWrapper>
    </Router>
  );
}

export default GeneralPageContainer;
