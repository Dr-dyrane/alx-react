import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App/App';
import rootReducer from './reducers/rootReducer'; // Import the rootReducer

// Create the Redux store containing the root reducer
const store = configureStore({
  reducer: rootReducer, // Use the root reducer
  middleware: [thunk], // Apply thunk middleware
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools extension only in development
});

// Implement a provider passing the store to the main App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
