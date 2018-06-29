/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './app/reducers'
import AppContainer from './app/containers/AppContainer'

import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

//define logger middleware: set logger for only development mode
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  //more boilerplate. Enhancer composes different middleware
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducers,  enhancer);
}

const store = configureStore({});

persistStore(store, {storage: AsyncStorage})

const App = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
)