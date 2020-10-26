// Dependencies
import React, {useEffect,useState} from 'react';
import styled from 'styled-components';

// Component
const LoadingBar = () => {
    const [activeBar, setActiveBar] = useState(-1);
    const barsArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    useEffect(() => {
        // do interval here
        // this is temporary and for display only
        // TODO: Replace with real progress from server.
        // TODO: Most likely won't need a progress bar since it will be instant.
        const timer = setInterval(() => setActiveBar(activeBar + 1), 60);
        return () => clearInterval(timer);
    });

    return(
        <ComponentWrapper>
            {
                barsArr.map( (bar, index) => {
                    return(
                        <div className={activeBar > index ? "active" : ""}></div>
                    )
                })
            }
        </ComponentWrapper>
    )
}

export default LoadingBar


// Styles

const ComponentWrapper = styled.div`
    width: 100%;
    height: 11px;
    margin-top: 10px;
    background-color:#636975;
    display: flex;


    & > div {
        flex: 1;
        background-color: #40C28D;
        margin: 1px;
        opacity: 0;
    }

    & > div.active {
        opacity: 1;
    }

    & > div:nth-child(1) { background-color: #DF251D}
    & > div:nth-child(2) { background-color: #EE4852}
    & > div:nth-child(3) { background-color: #FB7A75}
    & > div:nth-child(4) { background-color: #F8A811}
    & > div:nth-child(5) { background-color: #FFC559}
    & > div:nth-child(6) { background-color: #FFD78C}
    & > div:nth-child(7) { background-color: #88E1BC}
    & > div:nth-child(8) { background-color: #6ADAAB}
`;