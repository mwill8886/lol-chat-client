// Dependencies
import React from 'react';
import styled from 'styled-components';

// Component Imports
import Header from './components/header';
import Frame from './components/frame';

// Component
const App = () => {
  return (
    <ComponentWrapper>
      <CenteredContent>
        <Header/>
        <Frame/>
      </CenteredContent>
    </ComponentWrapper>
  );
}

export default App;


// Note: I could have just copied the styles from Figma, but the visual results were different. 
// So I ended up just trying to match what it looked like in the wireframe.


// Styles

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(5, 2, 145); 
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const CenteredContent = styled.div`
  min-width: 5px;
  min-height: 5px;
`;