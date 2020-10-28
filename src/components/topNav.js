import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import * as variables from '../assets/variables';

const TopNavWrapper = styled.div`
    width: 100%;
    padding: 3rem;
`;

const Navigation = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

const Logo = styled.li`
    width: 70%;
    text-align: left;
    a{
        
        
        font-size: 3rem;
        color: ${variables.primaryGreen};
        text-decoration: none;
    }
`;

const NavButtons = styled.li`
    width: 30%;
    display: flex;
    justify-content: space-evenly;

    a{
        font-size: 1.6rem;
        text-decoration: none;
        color: ${variables.textColorPrimary};
        transition: all .3s;
        font-weight: 600;

        &:hover{
            color: ${variables.primaryGreen};
        }
    }
`;



const TopNav = () => {
    return(
        <TopNavWrapper>
            <Navigation>
                <Logo>
                    <NavLink to="/">Logo</NavLink>
                </Logo>
                <NavButtons>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/about">About</NavLink>
                </NavButtons>
            </Navigation>
        </TopNavWrapper>
    )
};

export default TopNav;