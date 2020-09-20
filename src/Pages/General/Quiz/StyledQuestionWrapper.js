import React from "react";
import styled from "styled-components";

const QuizQuestionWrapper = styled.div`
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    "QuestionSpace"
    "AnswersSpace";

`;
const QuestionSpaceWrapper = styled.div`
  background-color: #293241;
  font-weight: bold;
  font-size: 40px;
  grid-area: QuestionSpace;
  text-align: center;
`;

const AnswersSpaceWrapper = styled.div`
background-color: #E0FBFC;
font-size: 16px;
grid-area: AnswersSpace;
text-align: center;
`;


export {QuizQuestionWrapper, QuestionSpaceWrapper, AnswersSpaceWrapper}