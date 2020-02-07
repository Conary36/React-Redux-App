import React from 'react';;
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      
    </div>
  );
}


export default App;
