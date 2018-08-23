
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';

import configurateReducers from './configurate-reducers/index';
import sectionAppRequest from './request/sectionAppRequest';

// import TextCreator from '../../libs/text-creator/TextCreator.js';
import LocalStorageWorker from '../../libs/local-storage-worker/LocalStorageWorker.js';

const sectionAppPromise = sectionAppRequest();

sectionAppPromise.then(
    (sectionAppParams) => {

        window.globalWorker.setNewLoadedApp('section');
        new LocalStorageWorker();
        // new TextCreator(sectionAppParams.language);

        // sectionAppParams.text = {
        //     homeAppText: TextCreator.createHomeAppText()
        // };

        const reducer = configurateReducers(sectionAppParams);
        const store = createStore(reducer);

        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('section-app-container')
        );
    }
);
