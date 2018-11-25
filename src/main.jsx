
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainApp from './main-app/MainApp';

import configurateReducers from './main-app/configurate-reducers/index';
import mainAppRequest from './main-app/request/mainAppRequest';

import configurateHeaderReducer from './components/header/impl/reducer';
import configurateSideBarReducer from './components/side-bar/impl/reducer';
import configurateFooterReducer from './components/footer/impl/reducer';

import TextCreator from './libs/text-creator/TextCreator';
import LocalStorageWorker from './libs/local-storage-worker/LocalStorageWorker';
import GlobalWorker from './libs/GlobalWorker';

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

        const reducer = configurateReducers(mainAppParams, configurateHeaderReducer, configurateSideBarReducer,
            configurateFooterReducer);
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
