import React, { useState } from 'react';
import MatrixDrawer from './components/MatrixDrawer.jsx';
import Menu from './components/Menu.jsx';
import './App.css';
import { Container } from '@material-ui/core';
import { createMatrix, colorFieldsInMatrix } from './algorithm/matrixFunctions.js';


function App() {

  const [matrix, setMatrix] = useState([]);
  const [count, setCount] = useState(0);

  const calculateMatrix = () => {
    setMatrix(createMatrix(count));
  };

  const colorFieldsForValue = () => {
    setMatrix(colorFieldsInMatrix(matrix, 1));
  };

  return (
    <Container>
        <Menu
            onCountChanged={(value) => setCount(value)}
            onCreateClicked={() => calculateMatrix()}
            onFillClicked={() => colorFieldsForValue()}
            isFillEnabled={matrix && matrix.length > 0}
            isCreationEnabled={count > 0}
        />
        <MatrixDrawer matrix={matrix} />
    </Container> 
  );
}

export default App;
