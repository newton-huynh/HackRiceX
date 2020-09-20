import React from 'react';
import styled from 'styled-components';
import Person from './Person.js';
import Newton from './../../../Images/newton.jpeg';
import Janet from './../../../Images/janet.jpeg';
import Vivian from './../../../Images/vivian.jpeg';
import Anna from './../../../Images/anna.jpeg';



const AboutUsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 4fr 4fr;
    grid-template-areas:
        "AboutUsTitle AboutUsTitle"
        "NewtonBlurb JanetBlurb"
        "AnnaBlurb VivianBlurb";
    height: 100%;
    width: 100%;
    background-color: white;
    text-align: center;
`;

const AboutUsTitle = styled.div`
    grid-area: AboutUsTitle;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin: 50px;
    color: #293241;
`;

const NewtonBlurb = styled.div`
    grid-area: NewtonBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 80px 10px 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
`;

const JanetBlurb = styled.div`
    grid-area: JanetBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 130px 10px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;

`;

const AnnaBlurb = styled.div`
    grid-area: AnnaBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 80px 10px 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;

`;

const VivianBlurb = styled.div`
    grid-area: VivianBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 130px 10px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;

`;


function AboutUs () {
    return (
        <AboutUsWrapper>
            <AboutUsTitle>about us</AboutUsTitle>
            <NewtonBlurb>
                <Person image={Newton} name="Newton Huynh" bio="What's up yall! My name is Newton Huynh and had a blast creating this project for my first hackathon. I am a sophomore at Rice University studying CS and I'm from Will Rice! "></Person>
            </NewtonBlurb>
            <JanetBlurb>
                <Person image={Janet} name="Janet Lu" bio="Hi! My name is Janet Lu and I am a Rice University sophomore studying CS from Will Rice College. As my first hackathon, I'm happy I got to work with my team and create a project like this. I loved working on it and I definitely learned a lot!"></Person>
            </JanetBlurb>
            <AnnaBlurb>
                <Person image={Anna} name="Anna Bai" bio="Hey there! My name is Anna Bai and I'm a sophomore at Rice University studying computer science. This website is what my team and I made at our first hackathon, and I just hope it can be a resource to anyone who is looking for one. Thanks for checking it out!"></Person>
            </AnnaBlurb>
            <VivianBlurb>
                <Person image={Vivian} name="Vivian Ellis" bio="Hi everyone! My name is Vivian Ellis and I am a sophomore at Rice studying CS. Working on this project has been a great time and I'm proud to see what it's become. Can't wait to learn more!"></Person>
            </VivianBlurb>
        </AboutUsWrapper>
    )
}

export default AboutUs