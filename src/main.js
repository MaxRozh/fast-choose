
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainApp from './main-app/MainApp.js';

import configurateReducers from './main-app/configurate-reducers/index';
import mainAppRequest from './main-app/request/mainAppRequest';

import TextCreator from './libs/text-creator/TextCreator.js';
import LocalStorageWorker from './libs/local-storage-worker/LocalStorageWorker.js';
import GlobalWorker from './libs/GlobalWorker.js';

const mainAppPromise = mainAppRequest();

mainAppPromise.then(
    (mainAppParams) => {

        new LocalStorageWorker();
        new TextCreator(mainAppParams.language);
        new GlobalWorker();

        mainAppParams.text = {
            headerText: TextCreator.createHeaderText(),
            footerText: TextCreator.createFooterText(),
            sideBarText: TextCreator.createSideBarText()
        };

        const reducer = configurateReducers(mainAppParams);
        const store = createStore(reducer);
        const pagesLink = {
            homeScrLink: mainAppParams.homeScrLink,
            sectionsScrLink: mainAppParams.sectionsScrLink,
            sectionScrLink: mainAppParams.sectionScrLink,
            newsScrLink: mainAppParams.newsScrLink
        };

        ReactDOM.render(
            <Provider store={store}>
                <MainApp pagesLink={pagesLink} />
            </Provider>,
            document.getElementById('main-app-container')
        );
    }
);
