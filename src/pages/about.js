import React from 'react';
import styled from 'styled-components';
import TopNav from '../components/topNav';
import * as variables from '../assets/variables';
import image from '../assets/images/contact.jpg';

const AboutWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const TopnavWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
`;

const ContentLeft = styled.div`
    width: 55%;
    height: 100%;
    position: relative;
`;

const ContentLeftText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`;

const ContentLeftHeaderPrimary = styled.h1`
    font-size: 7rem;
    margin: 0;
    text-align: left;
`;

const ContentLeftHeaderSecondary = styled.h2`
    font-size: 5rem;
    margin: 0 0 0 2rem;
    font-weight: 500;
    text-align: left;
`;

const ContentLeftParagraph = styled.p`
    /* width: 40%; */
    text-align: left;
    line-height: 1.6;
    font-size: 1.8rem;
    margin-top: 5rem;
    span {
        font-weight: 700;
    }
`;

const ContentRight = styled.div`
    width: 45%;
    height: 100%;
    background-image: linear-gradient(to right bottom, ${variables.colorLightRGBA}, ${variables.colorLightSecondaryRGBA}), url(${image});
    background-size: cover;
`;

const About = () => {
    return (
        <AboutWrapper>
            <TopnavWrapper>
                <TopNav />
            </TopnavWrapper>
            <ContentWrapper>
                <ContentLeft>
                    <ContentLeftText>
                        <ContentLeftHeaderPrimary>About</ContentLeftHeaderPrimary>
                        <ContentLeftHeaderSecondary>Us...</ContentLeftHeaderSecondary>
                            <ContentLeftParagraph><span>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in justo a ligula sodales condimentum ut at diam. Maecenas ac aliquet dui. Aliquam pretium mi ac magna consectetur, eu sodales eros tempus. Duis fermentum metus ut euismod bibendum. Aliquam ut quam vel arcu convallis pellentesque. Donec vulputate lectus leo, a mattis felis luctus eu.</ContentLeftParagraph>
                    </ContentLeftText>
                    
                </ContentLeft>
                <ContentRight>

                </ContentRight>
            </ContentWrapper>
        </AboutWrapper>
    )
};

export default About;