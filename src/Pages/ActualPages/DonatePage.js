import React from 'react';
import styled from "styled-components";
import {Link,Button} from 'rebass';

const DonateWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr 7fr;
    grid-template-areas: 
        "DonateTitle DonateTitle"
        "DescriptionDonation DescriptionDonation"
        "LeftColDonate RightColDonate";
    font-size: 20px;
    height: 100%;
    width: 100%;
    background-color: white;
    text-align: center;
    
`;

const DonateTitle = styled.div`
    
    grid-area: DonateTitle;
    font-size: 40px;
    margin: 30px;
      
`;

const DescriptionDonation = styled.div`
    grid-area: DescriptionDonation;
    margin: 0px 50px 40px 60px;
`;

const LeftColDonate = styled.div`
    grid-area: LeftColDonate;
    margin: 30px;
    background-color: #cacbcc;
    height: 40%;
    padding-top: 20px;
`;

const RightColDonate = styled.div`
    grid-area: RightColDonate;
    font-size: 20px;
    margin: 30px;
    background-color: #cacbcc;
    height: 40%;
    padding-top: 20px;
    
`;

function DonatePage() {
    return (
        <DonateWrapper>  
            <DonateTitle>donate</DonateTitle>
            <DescriptionDonation>
                Interested in helping pro bono lawyers be compensated for their work? Below are links to two pages: on the left, a place to donate 
                where your money will be split between 70+ community bail funds, mutual aid funds, and racial justice organizers and on the right, 
                a GoFundMe for pro bono representation of Houston protesters.
            </DescriptionDonation>
            <LeftColDonate>
                <p>donate to ActBlue:</p>
                <Button variant='primary'><Link variant='nav' href='https://secure.actblue.com/donate/bail_funds_george_floyd'>actBlue</Link></Button>
            </LeftColDonate>
            <RightColDonate>
                <p>donate to help Houston protestors get representation:</p>
                <Button variant='primary'><Link variant='nav' href='https://www.gofundme.com/f/pro-bono-representation-of-houston-protestors?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1'>goFundMe</Link></Button>
            </RightColDonate>
        </DonateWrapper>    
    )
}

export default DonatePage
