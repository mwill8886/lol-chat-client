// Depencencies
import React from 'react';
import styled from 'styled-components';

// Component
const Messege = (props) => {
    const isUser = props.user == "username"; // temp
    // TODO: set a global store keeping track of logged in user
    return(
        <ComponentWrapper>
            <User isUser={isUser}>{props.user}:</User>
            {props.children}
        </ComponentWrapper>
    );
};


export default Messege;

// Styles

const ComponentWrapper = styled.div`
    margin: 8px 0px;
`;
const User = styled.span`
    display: inline-block;
    font-weight: bold;
    margin-right: 8px;
    color: ${props => props.isUser ? '#1247EF' : '#DF251D'}
`;
