import React from "react";
import GeneralPageContainer from "./Pages/General/GeneralPageContainer.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/ActualPages/HomePage.js";
import AboutUsPage from "./Pages/ActualPages/AboutUsPage.js";
import Donate from "./Pages/ActualPages/DonatePage.js";
import TakeQuizPage from "./Pages/ActualPages/TakeQuizPage.js";
import styled from "styled-components";
import Routing from './Routing.js';



function App() {
  return (
    <GeneralPageContainer/>
  );
}

export default App;
