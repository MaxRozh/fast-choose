
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
//
// import App from './App.jsx';
//
// import configurateReducers from './configurate-reducers/index';
// import homeAppRequest from './request/homeAppRequest';
//
// import TextCreator from '../../libs/text-creator/TextCreator.js';
// import LocalStorageWorker from '../../libs/local-storage-worker/LocalStorageWorker.js';

const loadSectionsApp = () => {

    // const homeAppPromise = homeAppRequest();
    //
    // homeAppPromise.then(
    //     (homeAppParams) => {
    //
    //         new LocalStorageWorker();
    //         new TextCreator(homeAppParams.language);
    //
    //         homeAppParams.text = {
    //             homeAppText: TextCreator.createHomeAppText(),
    //             headerText: TextCreator.createHeaderText(),
    //             footerText: TextCreator.createFooterText(),
    //             sideBarText: {}
    //         };
    //
    //         const reducer = configurateReducers(homeAppParams);
    //         const store = createStore(reducer);
    //
    //         window.homeAppIsLoaded = true;

    log.warn('SECTIONS IS LOADED');

    ReactDOM.render(
        <div>SECTIONS</div>,
        document.getElementById('sections-app-container')
    );
    //     }
    // );
};

export default loadSectionsApp;
