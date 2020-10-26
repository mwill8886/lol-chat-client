// Dependencies
import React from 'react';
import styled from 'styled-components';

// Component Imports
import LoadingBar from './loading-bar';

// Images
import sendingImg from '../images/sending.png';

// Component
const ChatInput = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { messegeList, setMessegeList, setIsSending } = props;
        setIsSending(true);

        setTimeout(() => {
            const inputValue = e.target.chat.value

            // userValue is temporary to show different users
            // TODO: Pull user value out of redux store,
            // TODO: redux store will hold messege history from server
            
            // TODO: Check users status and display the receiving usres status on send
            // TODO: if that receiving users status is 'busy' or 'offline'
            const userValue = messegeList.length % 2 == 0 ? 'username' : 'username2';
            
            const newMsg = {user: userValue, messege: inputValue};
            const list = [...messegeList];
            list.push(newMsg)
            setMessegeList(list);
            // TODO: When sockets are added - send input value to socket
            // TODO: When sound file is found - play AOL file sent sound
            
            // clear input box
            e.target.chat.value = "";
            e.target.chat.focus();
    
            // scroll chat window
            const chatWindow = document.getElementById("messege-viewer");
            chatWindow.scrollTop = (chatWindow.scrollHeight + 100);
            setIsSending(false);
        },1000);
    }


    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <TextArea name="chat" id="messege-input" className="bevel"/>
            <SendButton type='submit' isSending={props.isSending} disabled={false}>
                <img src={sendingImg} alt="send"/>
                {props.isSending  
                    ?<>
                        <span>Sending...</span>
                        
                    </>
                    : <>
                        <span>Send</span>
                    </>
                }
                <LoadingBar isSending={props.isSending}/>
            </SendButton>
        </form>
    )
}

export default ChatInput


// Styles

// use input if you want to be able to submit from pressing enter without having set event listeners
// use textarea to match the figma
const TextArea = styled.textarea`
    cursor: text;
    display: block;
    margin-bottom: 11px;
    width: 100%;
    min-height: 64px;
    background-color: #ffffff;
    resize: none;
`;

const SendButton = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;
    
    &:active,
    &:focus {
        outline: 1px solid #FBCE67;
    }

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
