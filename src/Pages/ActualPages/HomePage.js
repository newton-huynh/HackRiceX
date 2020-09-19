import styled from 'styled-components'
import ImageSlideshow from '../PageComponents/ImageSlideshow.js'
import React from 'react'

const HomePageWrapper = styled.div`
background-color:purple;
display:grid;
grid-template-rows: 1fr;
grid-template-columns:1fr;
grid-template-areas:
    "TopLeft TopRight"
    "BottomLeft BottomRight";
height:100%;
width:100%;
`
const TopLeftWrapper = styled.div`
background-color:orange;
grid-area: TopLeft;
`

function HomePage() {
    return (
       <HomePageWrapper>
           <ImageSlideshow/>
       </HomePageWrapper>
    )
}

export default HomePage
