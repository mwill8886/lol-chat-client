// Dependencies
import React, {useEffect,useState, useRef} from 'react';
import styled from 'styled-components';

// Component
const LoadingBar = (props) => {
    const barsArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const [activeBar, setActiveBar] = useState(-1);

    useEffect(() => {
        // do interval here
        // this is temporary and for display only
        // TODO: Replace with real progress from server.
        // TODO: Most likely won't need a progress bar since it will be instant.
        if(props.isSending){
            const timer = window.setInterval(() => { 
                setActiveBar(prevActiveBar => prevActiveBar + 1)
            }, 50);
            return () => window.clearInterval(timer);
        } else {
            setActiveBar(-1);
        }
    });

    return(
        <ComponentWrapper>
            {
                barsArr.map( (bar, index) => {
                    console.log('map');
                    return(
                        <div key={`progress-${index}`} className={activeBar >= index ? "active" : ""}></div>
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
        margin: 1px;
        background-color: #9D9B9C;
    }

    & > div.active {
        background-color: #40C28D;
    }

    & > div:nth-child(1).active { background-color: #DF251D}
    & > div:nth-child(2).active { background-color: #EE4852}
    & > div:nth-child(3).active { background-color: #FB7A75}
    & > div:nth-child(4).active { background-color: #F8A811}
    & > div:nth-child(5).active { background-color: #FFC559}
    & > div:nth-child(6).active { background-color: #FFD78C}
    & > div:nth-child(7).active { background-color: #88E1BC}
    & > div:nth-child(8).active { background-color: #6ADAAB}
`;