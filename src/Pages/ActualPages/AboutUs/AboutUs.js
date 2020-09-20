import React from 'react';
import styled from 'styled-components';
import Person from './Person.js';
import Newton from './../../../Images/newton.jpeg';

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
    margin: 30px;
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
    padding: 20px;
`;

const JanetBlurb = styled.div`
    grid-area: JanetBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 130px 10px 80px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const AnnaBlurb = styled.div`
    grid-area: AnnaBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 80px 10px 130px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const VivianBlurb = styled.div`
    grid-area: VivianBlurb;
    text-align: center;
    background-color: #98c1d9;
    margin: 10px 130px 10px 80px;
    display: flex;
    align-items: center;
    justify-content: center;

`;


function AboutUs () {
    return (
        <AboutUsWrapper>
            <AboutUsTitle>about us</AboutUsTitle>
            <NewtonBlurb>
                <Person image={Newton} name="Newton Hyunh" bio="he loves cs"></Person>
            </NewtonBlurb>
            <JanetBlurb>
                <Person image="newton.jpg" name="Janet Lu" bio="he loves cs"></Person>
            </JanetBlurb>
            <AnnaBlurb>
                <Person image="newton.jpg" name="Anna Bai" bio="he loves cs"></Person>
            </AnnaBlurb>
            <VivianBlurb>
                <Person image="newton.jpg" name="Vivian Ellis" bio="he loves cs"></Person>
            </VivianBlurb>
        </AboutUsWrapper>
    )
}

export default AboutUs