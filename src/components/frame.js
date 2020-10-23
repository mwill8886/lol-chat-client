// Dependencies
import React from 'react';
import styled from 'styled-components';

// Component Imports
import StatusSelector from './status-selector';
import Messege from './messege';

// Images
import send from '../images/send.png';
import sending from '../images/sending.png';

// Component
const Frame = () => {
    return(
        <ComponentWrapper className="bevel">
            <StatusSelector />
            <ChatWindow className="bevel">
                <Messege user="username">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Messege>
                <Messege user="username2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate ullamcorper magna. 
                </Messege>
                
            </ChatWindow>
            <form onSubmit={()=> alert('submit')}>
                <TextArea className="bevel"></TextArea>
                <SendButton type='submit'>
                    <img src={sending} alt="send"/>
                    <span>Send</span>
                </SendButton>
            </form>
        </ComponentWrapper>
    )
};

export default Frame;


// Styles

const ComponentWrapper = styled.div`
    width: 680px;
    height: 542px;
    padding: 11px;
    background-color: #c3c3c3;
`;

const ChatWindow = styled.div`
    padding: 0px 8px;
    margin-bottom: 11px;
    height: 288px;
    background-color: #ffffff;
    overflow-y: scroll;
`;

const TextArea = styled.textarea`
    cursor: text;
    display: block;
    margin-bottom: 11px;
    width: 100%;
    min-height: 64px;
    background-color: #ffffff;
`;

const SendButton = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;

    & > img {
        filter: grayscale(100%);
        margin-bottom: 5px;
    }

    & > span {
        font-weight: bold;
        opacity: .5;
    }

    &:hover {
        img {
            filter: grayscale(0%);
        }
        span {
            opacity: 1;
        }
    }


`;