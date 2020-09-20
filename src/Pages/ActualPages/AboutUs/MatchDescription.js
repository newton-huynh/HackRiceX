import React from 'react';
import styled from 'styled-components';

const MatchDescriptionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 4fr 4fr;
    grid-template-areas:
        "MatchDescriptionTitle"
        "MatchDescriptionList"
        "MatchDescriptionWords";
    height: 100%;
    width: 100%;
    background-color: white;
`;

const MatchDescriptionTitle = styled.div`
    grid-area: MatchDescriptionTitle;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin: 50px 30px 30px 30px;
`;

const MatchDescriptionList = styled.div`
    grid-area: MatchDescriptionList;
    width: 30%;
    margin: 0 auto;
    line-height: 25px;
    
    
`;

const MatchDescriptionWords = styled.div`
    grid-area: MatchDescriptionWords;
    width: 60%;
    margin: 0 auto;
    line-height: 25px;
    text-align: center;
    
    
`;

function MatchDescription() {
    return (
        <MatchDescriptionWrapper>
            <MatchDescriptionTitle>how matching works</MatchDescriptionTitle>
            <MatchDescriptionList>
                <h3>So how does the matching work? 4 simple steps:</h3>
                <ol>
                    <li>Fill out the "match" quiz with criteria that you're looking for.</li>
                    <li>Click submit!</li>
                    <li>Once submitted, you should see the pro bono lawyers matching or most closely matching your specified criteria.</li>
                    <li>Save their information, and go protest with peace of mind!</li>
                </ol>
            </MatchDescriptionList>
            <MatchDescriptionWords>
                If you're curious about how we actually make these matches, we assign weights to each criteria. We assigned heavier
                weights to the criteria that are more important—location has the largest weight, since that's the most crucial criteria.
                For each lawyer, they'll get an overall score based on the weights, and the more a lawyer matches with your input criteria, 
                the higher score they will receive and therefore be recommended higher. 
            </MatchDescriptionWords>
        </MatchDescriptionWrapper>
    )
}

export default MatchDescription