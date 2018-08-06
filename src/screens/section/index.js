
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

class TestComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Section'
        };

        this.changeValue = this.changeValue.bind(this);

        window.changeCurrentApp('section', [
            {
                name: 'onSearch',
                action: this.changeValue
            }
        ]);
    }

    changeValue(value) {
        log.warn('SECTION SEARCH', value);
        this.setState({ value });
    }

    render() {

        return <div>{this.state.value}</div>;
    }
}

const loadSectionApp = () => {

    // const homeAppPromise = homeAppRequest();

    // homeAppPromise.then(
    //     (homeAppParams) => {

    // new LocalStorageWorker();
    // new TextCreator(homeAppParams.language);
    //
    // homeAppParams.text = {
    //     homeAppText: TextCreator.createHomeAppText(),
    //     headerText: TextCreator.createHeaderText(),
    //     footerText: TextCreator.createFooterText(),
    //     sideBarText: {}
    // };
    //
    // const reducer = configurateReducers(homeAppParams);
    // const store = createStore(reducer);
    //
    // window.homeAppIsLoaded = true;

    //<Provider store={store}>
    //<App/>
    //</Provider>,

    log.warn('SECTION IS LOADED', 'what');

    window.setNewLoadedApp('section');

    ReactDOM.render(
        <TestComponent/>,
        document.getElementById('section-app-container')
    );
    // }
    // );
};

loadSectionApp();
