import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts';
import Postform from './Components/Postform';
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
