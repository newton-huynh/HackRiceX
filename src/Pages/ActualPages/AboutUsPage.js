import React from 'react'
import AboutUs from './AboutUs/AboutUs.js';
import MatchDescription from './AboutUs/MatchDescription.js';
import styled from 'styled-components';

const AboutUsPageWrapper = styled.div`
    overflow: scroll;
`;

function AboutUsPage() {
    return (
        <AboutUsPageWrapper>
            <AboutUs />
            <MatchDescription />
        </AboutUsPageWrapper>
    )
}

export default AboutUsPage
