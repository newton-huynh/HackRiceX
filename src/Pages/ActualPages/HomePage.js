import styled from "styled-components";
import ImageSlideshow from "../PageComponents/ImageSlideshow.js";
import React from "react";
import {NavLink} from "react-router-dom";


const HomePageWrapper = styled.div`
  background-color: black;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const HomePageText = styled.div`
  text-shadow: 3px 3px 30px #000000;
  position: absolute;
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 3vw;
  color: white;
  align-self: center;
  justify-self: center;
  text-align: center;
  width: auto;
`;
const HomePageMainText = styled(HomePageText)`
  font-size: 65px;
`;



const HomePageSubText = styled.div`
  font-size: 29px;
  text-shadow: 3px 3px 20px #000000;
  color: white;
  text-align: center;
`;

const TakeQuizButtonWrapper = styled.div`
  background-color: black;
  border-radius: 25px;
  position: relative;
  font-size: 25px;
  padding: 10px 0px;
  width: 15vw;
  margin: 20px 20vw;
  text-decoration: none;
  background-color:#37af37;
  color:white;
`;
function TakeQuizButton(props) {
  return (<NavLink to="/TakeQuiz" style={{textDecoration: "none"}}><TakeQuizButtonWrapper>{props.name}</TakeQuizButtonWrapper></NavLink>);
}

function HomePage() {
  return (
    <HomePageWrapper>
      <ImageSlideshow />
      <HomePageMainText>
        PROTECT YOUR PROTESTS.
        <HomePageSubText>
          In one minute, we'll find the right pro bono lawyers just for you, so
          you can focus on the issues that truly matter.
        </HomePageSubText>
        <TakeQuizButton name="TAKE QUIZ" />
      </HomePageMainText>
    </HomePageWrapper>
  );
}

export default HomePage;
