import React from 'react';
import styled from 'styled-components';
import vido1 from '../assets/videos/video.mp4';
import vido2 from '../assets/videos/video.webm';
import TopNav from '../components/topNav';
import * as variables from '../assets/variables';

 
const HomeWrapper = styled.div`
    position: relative;
    /* height: 100vh; */
`;

const Video = styled.video`
 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: .15;
  z-index: -1;
`;

const TopNavWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
`;

const ContentWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ContentHeader = styled.h1`
    font-weight: 500;
    color: ${variables.primaryGreen};
    font-size: 4rem;
    letter-spacing: 1rem;
`;

const Content = styled.p`

`;

const ContentButton = styled.button`
    padding: 1rem 3rem;
    font-size: 1.6rem;
    background: transparent;
    border: 2px solid ${variables.primaryGreen};
    color: ${variables.primaryGreen};
    font-weight: 500;
    border-radius: 1rem;
    margin-top: 1.5rem;
    transition: all .3s;

    &:hover{
        background: ${variables.primaryGreen};
        color: #ffffff;
    }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Video autoPlay muted loop>
                <source src={vido1} type="video/mp4"/>
                <source src={vido2} type="video/webm"/>
            </Video>
            <TopNavWrapper>
                <TopNav/>
            </TopNavWrapper>
            <ContentWrapper>
                <ContentHeader>Lorem Ipsum</ContentHeader>
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
                <ContentButton>More</ContentButton>
            </ContentWrapper>
        </HomeWrapper>
    )
}

export default Home;