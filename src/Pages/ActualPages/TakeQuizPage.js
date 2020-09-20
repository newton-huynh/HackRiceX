import React from 'react'
import Quiz from '../../Quiz/Quiz.js.js'
import styled from 'styled-components';


const QuizPageWrapper= styled.div`
background-color: white;
height:100%;
width:100%;
display: flex;
flex-direction:column;
justify-content: center;
flex-wrap: wrap;

`

function TakeQuizPage() {
    return (
        <QuizPageWrapper>
            <Quiz />
        </QuizPageWrapper>
    )
}

export default TakeQuizPage
