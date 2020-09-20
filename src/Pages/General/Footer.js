import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/blm2.png';
import instagram from '../../Images/ig2.png';

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "FooterLogo";
    
`;

const FooterLogo = styled.div`
    grid-area: FooterLogo;
    padding-top: 7px;
    text-align: center;

`;

const LogoPicture = styled.img`
    height:2%;
    width: 2%;

`


function Footer() {
    return (
        <FooterWrapper>
            <FooterLogo>
                <LogoPicture src={logo}/>
            </FooterLogo>
        </FooterWrapper>
    )
}

export default Footer