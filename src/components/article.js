import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/images/nat-1-large.jpg';
import image2 from '../assets/images/nat-2-large.jpg';
import image3 from '../assets/images/nat-3-large.jpg';
import * as variables from '../assets/variables';

const ArticleWrapper = styled.div`
    width: 50%;
    margin: 0 auto 10rem auto;
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
    transition: all .6s;

    &:hover{
        cursor: pointer;
        transform: translateY(-1rem);
    }
`;

const ArticleHeading = styled.div`
    height: 30rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(to right bottom, ${variables.primaryGreenRGBA}, ${variables.greenSecondaryRGBA}), url(${props => props.image});
    position: relative;
`;

const ArticleHeader = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    font-size: 3rem;
    color: ${variables.colorLight};
    margin: 0;
`;

const ArticleContent = styled.p`
    background: transparent;
    margin: 0;
    padding: 3rem 5rem;
    text-align: left;
    /* border-bottom: 3px solid ${variables.primaryGreen};
    border-right: 3px solid ${variables.primaryGreen}; */
`;

const Article = ({ header, content, image }) => {
    let img;
    switch(image){
        case 1: {
            img = image1;
            break;
        }
        case 2: {
            img = image2;
            break;
        }
        case 3: {
            img = image3;
            break;
        }
        case 4: {
            img = image3;
            break;
        }
    }
    return (
        <ArticleWrapper>
            <ArticleHeading image={img}>
                <ArticleHeader>{header}</ArticleHeader>
            </ArticleHeading>
            <ArticleContent>
                {content}
            </ArticleContent>
        </ArticleWrapper>
    )
};

export default Article;