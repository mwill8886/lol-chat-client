// Dependencies
import React from 'react';
import styled from 'styled-components';

// Images
import send from '../images/send.png';
import sending from '../images/sending.png';

// Component
const Frame = () => {
    return(
        <ComponentWrapper className="bevel">
            <Select className="bevel">
                <Selection>
                    <Indicator color="#40C28D"/>
                    <span>Im eating pizza</span>
                </Selection>
                <DropdownButton className="bevel-reverse">
                    <Arrow/>
                </DropdownButton>
                {/* <DropdownSelection className="bevel">
                    <div><Indicator color="#DF251D"/>Offline</div>
                    <div><Indicator color="#F8A811"/>Busy</div>
                    <div><Indicator color="#40C28D"/>Eating Pizza</div>
                </DropdownSelection> */}
            </Select>
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

const Select = styled.div`
    min-height: 38px;
    margin-bottom: 11px;
    background-color: #c3c3c3;
    display: flex;
    position: relative;
`;

const Selection = styled.div`
    flex: 1;
    display: flex;
    padding: 8px;
    align-items: center;
    line-height: 0px;
`;

const Indicator = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 100%;
    background-color: ${props => props.color};
`;

const DropdownButton = styled.div`
    cursor: pointer;
    width: 36px;
    height: 36px;
    margin-right: 2px;
    margin-bottom: 2px;
    background-color: #E5E5E5;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #cccccc;
    }
`;

const DropdownSelection = styled.div`
    position: absolute;
    padding: 8px;
    top: 45px;
    left: -4px;
    right: -4px;
    min-height: 100px;
    background-color: #C3C3C3;

    & > div {
        padding-top: 5px;
        padding-bottom: 5px;

        &:hover {
            background-color: rgba(0,0,0,0.1);
        }
    }
`;

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 7.5px 0 7.5px;
    border-color: #000000 transparent transparent transparent;
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