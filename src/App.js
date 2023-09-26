import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { applyNumber, operationChange, clearDisplay, memoryAdd, memoryRecall, memoryClear } from './actions';
import { useReducer} from 'react';



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handlerApplyNumber = (event) => {
    const {value} = event.target;
    dispatch(applyNumber(Number(value)));
  };

  const handlerOperationChange = (event) => {
    dispatch(operationChange(event.target.value));
  };

  const handlerClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleMemory = (event) => {
    const {value} = event.target;
    if(value === "M+"){
     dispatch(memoryAdd())  
    }else if(value === "MR"){
      dispatch(memoryRecall());
    }else if(value === "MC"){
      dispatch(memoryClear())
    }
    
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick = {handleMemory}/>
              <CalcButton value={"MR"} onClick = {handleMemory}/>
              <CalcButton value={"MC"} onClick = {handleMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {handlerApplyNumber} />
              <CalcButton value={2} onClick = {handlerApplyNumber}/>
              <CalcButton value={3} onClick = {handlerApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {handlerApplyNumber}/>
              <CalcButton value={5} onClick = {handlerApplyNumber}/>
              <CalcButton value={6} onClick = {handlerApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {handlerApplyNumber}/>
              <CalcButton value={8} onClick = {handlerApplyNumber}/>
              <CalcButton value={9} onClick = {handlerApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {handlerOperationChange}/>
              <CalcButton value={"*"} onClick = {handlerOperationChange}/>
              <CalcButton value={"-"} onClick = {handlerOperationChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {handlerClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
