// Dependencies
import React, {useState} from 'react';
import styled from 'styled-components';

// Component Imports
import StatusSelector from './status-selector';
import Messege from './messege';
import ChatInput from './chat-input';

// Images
import Up from '../images/arrow-up.png';
import Down from '../images/arrow-down.png';

// TODO: Create node server with socket.io to add real chat functionality
// TODO: Create login/username form on start for starting user session with custom name
// TODO: When sound file is found - play AOL notification sound when msg received
// TODO: Add draggable and resizable functionality to the Frame component

// Component
const Frame = () => {
    const [messegeList, setMessegeList] = useState([]);
    const [isSending, setIsSending] = useState(false);

    return(
        <ComponentWrapper className="bevel">
            <StatusSelector />
            <ChatWindow className="bevel" id="messege-viewer">
                {
                    messegeList.map( (msg, index) => {
                        return(
                            <Messege key={`chat-msg-${index}`} user={msg.user}>{msg.messege}</Messege>
                        )
                    })
                }
            </ChatWindow>
            <ChatInput 
                isSending={isSending} 
                setIsSending={setIsSending} 
                messegeList={messegeList} 
                setMessegeList={setMessegeList}
            />
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

    /* Scrollbar styles */
    /* Please note, I do not think extensively overriding the native scrollbars is a good idea */

    /* width */
    ::-webkit-scrollbar {
    width: 39px;
    display: block;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #e5e5e5;
    padding-right: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #e5e5e5;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #828282;
    border-right: 2px solid #828282;
    box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 1);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #cccccc;
    }

    ::-webkit-scrollbar-button {
    width: 36px;
    height: 36px;
    margin-right: 2px;
    background-color: #e5e5e5;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #828282;
    border-right: 2px solid #828282;
    box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 1);
    margin-bottom: 20px;
    }

    ::-webkit-scrollbar-button:hover {
    background: #cccccc;
    }

    ::-webkit-scrollbar-button:decrement {
        background-image: url(${Up});
        background-repeat: no-repeat;
        background-position: center;
    }
    ::-webkit-scrollbar-button:increment {
        background-image: url(${Down});
        background-repeat: no-repeat;
        background-position: center;
    }
`;