import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
import reducers from  './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCZT1KhL2kc8w7PjqPnsFN8TXIx8tBVvXU",
      authDomain: "culinary-f856a.firebaseapp.com",
      databaseURL: "https://culinary-f856a.firebaseio.com",
      projectId: "culinary-f856a",
      storageBucket: "culinary-f856a.appspot.com",
      messagingSenderId: "177038228497"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // second argument is for any initial state that we want to pass to our redux app
    // optional, server side renderring
    // third argument => store enhancer, adding additional func to the store
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
