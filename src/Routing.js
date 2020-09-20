import React from "react";
import GeneralPageContainer from "./Pages/General/GeneralPageContainer.js";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/ActualPages/HomePage.js";
import AboutUsPage from "./Pages/ActualPages/AboutUs/AboutUsPage.js";
import HowMatchingWorksPage from "./Pages/ActualPages/HowMatchingWorksPage.js";
import Donate from "./Pages/ActualPages/Donate/DonatePage.js";
import TakeQuizPage from "./Pages/ActualPages/TakeQuizPage.js";
import styled from "styled-components";
import ApplyPage from './Pages/ActualPages/ApplyPage.js'

function PageRouting() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/Home" exact component={HomePage} />
      <Route path="/HowMatchingWorks" exact component={HowMatchingWorksPage} />
      <Route path="/AboutUs" component={AboutUsPage} />
      <Route path="/Donate" component={Donate} />
      <Route path="/Apply" component={ApplyPage} />
      <Route path="/TakeQuiz" component={TakeQuizPage} />
    </Switch>
  );
}

export default PageRouting;
