// Dependencies
import React, { useState} from 'react';
import styled from 'styled-components';

const StatusArr = [
    { state: 'Im offline', color: '#DF251D'}, 
    {state: 'Im busy', color: '#F8A811'},
    {state: 'Im eating pizza', color: '#40C28D'}
];


// Component
const StatusSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(StatusArr[2]);

    const handleSelect = (input) => {
        const newStatus = StatusArr[`${input}`]
        setStatus(newStatus);
        // update state with server
    }

    return(
        <ComponentWrapper className="bevel" onClick={() => setIsOpen(!isOpen)}>
            <Selection>
                <Indicator color={status.color}/>
                <span>{status.state}</span>
            </Selection>
            <DropdownButton className="bevel-reverse" >
                <Arrow/>
            </DropdownButton>
            {
                isOpen &&
                <DropdownSelection className="bevel">
                    <div onClick={() => handleSelect(0)}><Indicator color={StatusArr[0].color}/>Offline</div>
                    <div onClick={() => handleSelect(1)}><Indicator color={StatusArr[1].color}/>Busy</div>
                    <div onClick={() => handleSelect(2)}><Indicator color={StatusArr[2].color}/>Eating Pizza</div>
                </DropdownSelection>
            }
        </ComponentWrapper>
    );
}

export default StatusSelector;


// Styles

const ComponentWrapper = styled.div`
    cursor:pointer;
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
    top: 45px;
    left: -4px;
    right: -4px;
    min-height: 100px;
    background-color: #C3C3C3;

    & > div {
        padding: 5px 8px;
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
