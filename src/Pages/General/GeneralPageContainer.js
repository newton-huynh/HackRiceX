import styled from "styled-components";

import React from "react";

const GeneralPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 8vh 110vh 8vh;
  grid-template-areas:
    "header"
    "mainDisplay"
    "footer";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  background-color: red;
`;

const MainDisplayWrapper = styled.div`
  grid-area: mainDisplay;
  background-color: yellow;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  background-color: green;
`;

function GeneralPageContainer() {
  return (
    <GeneralPageWrapper>
      <HeaderWrapper> </HeaderWrapper>
      <MainDisplayWrapper> </MainDisplayWrapper>
      <FooterWrapper> </FooterWrapper>
    </GeneralPageWrapper>
  );
}

export default GeneralPageContainer;
