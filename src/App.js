import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './Reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import Router from "./Router";

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBvDD3JhvkabhtyLtA29BQWSd4vmrpqEyo',
            authDomain: 'reactnative-b6cfd.firebaseapp.com',
            databaseURL: 'https://reactnative-b6cfd.firebaseio.com',
            projectId: 'reactnative-b6cfd',
            storageBucket: 'reactnative-b6cfd.appspot.com',
            messagingSenderId: '1044940894139'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
