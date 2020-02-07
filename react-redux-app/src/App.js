import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import MusicList from './components/MusicList'
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <MusicList/>
        </div>
    </Provider>
  );
}


export default App;
