import React from "react";
import GeneralPageContainer from "./Pages/General/GeneralPageContainer.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/ActualPages/HomePage.js";
import AboutUsPage from "./Pages/ActualPages/AboutUsPage.js";
import Donate from "./Pages/ActualPages/DonatePage.js";
import TakeQuizPage from "./Pages/ActualPages/TakeQuizPage.js";
import styled from "styled-components";

function PageRouting() {
  return (

          <Switch>
            <Route path="/Home" exact component={HomePage} />
            <Route path="/AboutUs" component={AboutUsPage} />
            <Route path="/Donate" component={Donate} />
            <Route path="/TakeQuiz" component={TakeQuizPage} />
          </Switch>

  );
}

export default PageRouting;
