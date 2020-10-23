// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import logo from '../images/logo-man-50.png'


// Component
const Header = () => {
    return(
        <ComponentWrapper>
            <Logo src={logo} alt="logo" />
            <LOL>LOL</LOL>
            {/* 🤣 */}
            <IM>Instant Messenger</IM>
        </ComponentWrapper>
    )
};

export default Header;

// Styles

const ComponentWrapper = styled.div`
    margin-bottom: 10px;
`;

const Logo = styled.img`
    margin-right: 10px;
    margin-bottom: -5px;
`;

const LOL = styled.span`
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 2px;
    margin-right: 10px;
    -webkit-text-stroke: 4px #FFFFFF;
    color: #ffffff;
`;

const IM = styled.span`
    font-style: italic;
    font-size: 34px;
    color: #FFFFFF;
`;