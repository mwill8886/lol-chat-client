// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Images
import logo from '../images/logo-man-50.png'
 

// Component
const Header = () => {
    const [hover, setHover] = useState(false)
    return(
        <ComponentWrapper>
            <Logo src={logo} alt="logo" />
            <LOL onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {
                    hover 
                        ?   <>
                            <Letters>L</Letters>
                                <Emoji>🤣</Emoji>
                            <Letters>L</Letters>
                            </>
                        :   <Letters>LOL</Letters> 
                }
            </LOL>
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
    margin-right: 10px;
`;

const Letters = styled.span`
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 2px;
    
    -webkit-text-stroke: 4px #FFFFFF;
    color: #ffffff;
`;

const Emoji = styled.span`
    font-size: 30px;
    margin-left: -5px;
    margin-right: -4px;
`;

const IM = styled.span`
    font-style: italic;
    font-size: 34px;
    color: #FFFFFF;
`;