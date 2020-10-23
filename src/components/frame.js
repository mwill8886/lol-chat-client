// Dependencies
import React from 'react';
import styled from 'styled-components';

// Component Imports
import StatusSelector from './status-selector';

// Images
import send from '../images/send.png';
import sending from '../images/sending.png';

// Component
const Frame = () => {
    return(
        <ComponentWrapper className="bevel">
            <StatusSelector />
            <ChatWindow className="bevel">
                <Messege>
                    <User>SomebodyElse</User>
                    <Content>How much do you like dogs?</Content>
                </Messege>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat dui, pellentesque suscipit semper id, tempor at arcu. Vivamus blandit ut lectus id semper. Phasellus efficitur lorem vitae dictum tincidunt. Aliquam erat volutpat. Pellentesque sagittis mauris et mauris lacinia convallis. Nunc in lorem non neque fermentum aliquam a eget turpis. Quisque aliquam ornare tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod justo non turpis bibendum convallis.

Cras sem odio, laoreet id mi vitae, semper interdum erat. Nunc id tortor quis tortor molestie facilisis. Nullam facilisis ultrices urna, vitae suscipit est rhoncus vel. Aliquam vulputate pellentesque lorem, eget pulvinar dui consequat eu. Cras lobortis facilisis aliquam. Nunc vitae elit sagittis, imperdiet metus sit amet, pharetra lorem. Sed rutrum sem at placerat lobortis. Aenean consectetur consequat felis ut interdum. Aliquam quis metus eget diam rutrum sodales. Sed laoreet lorem turpis, nec finibus nulla condimentum sit amet. Donec leo massa, condimentum in efficitur at, sagittis a turpis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat dui, pellentesque suscipit semper id, tempor at arcu. Vivamus blandit ut lectus id semper. Phasellus efficitur lorem vitae dictum tincidunt. Aliquam erat volutpat. Pellentesque sagittis mauris et mauris lacinia convallis. Nunc in lorem non neque fermentum aliquam a eget turpis. Quisque aliquam ornare tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod justo non turpis bibendum convallis.

Cras sem odio, laoreet id mi vitae, semper interdum erat. Nunc id tortor quis tortor molestie facilisis. Nullam facilisis ultrices urna, vitae suscipit est rhoncus vel. Aliquam vulputate pellentesque lorem, eget pulvinar dui consequat eu. Cras lobortis facilisis aliquam. Nunc vitae elit sagittis, imperdiet metus sit amet, pharetra lorem. Sed rutrum sem at placerat lobortis. Aenean consectetur consequat felis ut interdum. Aliquam quis metus eget diam rutrum sodales. Sed laoreet lorem turpis, nec finibus nulla condimentum sit amet. Donec leo massa, condimentum in efficitur at, sagittis a turpis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat dui, pellentesque suscipit semper id, tempor at arcu. Vivamus blandit ut lectus id semper. Phasellus efficitur lorem vitae dictum tincidunt. Aliquam erat volutpat. Pellentesque sagittis mauris et mauris lacinia convallis. Nunc in lorem non neque fermentum aliquam a eget turpis. Quisque aliquam ornare tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod justo non turpis bibendum convallis.

Cras sem odio, laoreet id mi vitae, semper interdum erat. Nunc id tortor quis tortor molestie facilisis. Nullam facilisis ultrices urna, vitae suscipit est rhoncus vel. Aliquam vulputate pellentesque lorem, eget pulvinar dui consequat eu. Cras lobortis facilisis aliquam. Nunc vitae elit sagittis, imperdiet metus sit amet, pharetra lorem. Sed rutrum sem at placerat lobortis. Aenean consectetur consequat felis ut interdum. Aliquam quis metus eget diam rutrum sodales. Sed laoreet lorem turpis, nec finibus nulla condimentum sit amet. Donec leo massa, condimentum in efficitur at, sagittis a turpis.
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



const Messege = styled.div`
`;
const User = styled.div``;
const Content = styled.div``;

const ChatWindow = styled.div`
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