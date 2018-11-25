
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

import configurateReducers from './configurate-reducers/index';
import homeAppRequest from './request/homeAppRequest';

import TextCreator from '../../libs/text-creator/TextCreator';
import LocalStorageWorker from '../../libs/local-storage-worker/LocalStorageWorker';

const homeAppPromise = homeAppRequest();

homeAppPromise.then(
    (homeAppParams) => {

        window.globalWorker.setNewLoadedApp('home');
        new LocalStorageWorker();
        new TextCreator(homeAppParams.language);

        homeAppParams.text = {
            homeAppText: TextCreator.createHomeAppText()
        };

        const reducer = configurateReducers(homeAppParams);
        const store = createStore(reducer);

        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('home-app-container')
        );
    }
);
