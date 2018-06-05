
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app/impl/App.jsx';

import configurateReducers from './reducers/index';
import homeAppRequest from './request/homeAppRequest';

import TextCreator from './libs/text-creator/TextCreator.js';

const homeAppPromise = homeAppRequest();

homeAppPromise.then(
    (homeAppParams) => {

        new TextCreator(homeAppParams.language);

        homeAppParams.text = {
            homeAppText: TextCreator.createHomeAppText(),
            loginText: TextCreator.createLoginText()
        };

        const reducer = configurateReducers(homeAppParams);
        const store = createStore(reducer);

        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('container')
        );
    }
);
