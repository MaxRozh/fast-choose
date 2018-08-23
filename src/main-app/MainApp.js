
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import SideBar from '../components/side-bar/SideBar';
import Footer from '../components/footer/Footer';
import error404 from '../components/404/error404';

import homeAppConnect from '../screens/home/homeAppConnect.js';
import sectionAppConnect from '../screens/section/sectionAppConnect.js';

import './MainApp.scss';

const sections = () => {
    return <p>Sections</p>;
};

class MainApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentOpenedScreen: ''
        };

        this.num = 0;
        this.isHomeAppLoaded = false;
        this.isSectionsAppLoaded = false;
        this.isSectionAppLoaded = false;

        this.isComponentLoaded = false;

        this.loadHomeApp = this.loadHomeApp.bind(this);
        this.loadSectionsApp = this.loadSectionsApp.bind(this);
        this.loadSectionApp = this.loadSectionApp.bind(this);
    }

    componentDidMount() {
        this.isComponentLoaded = true;
    }

    loadHomeApp() {

        if (this.num > 30) { return <span/>; }

        if (this.isComponentLoaded && !this.isHomeAppLoaded) {

            homeAppConnect(this.appContentElem, this.props.pagesLink.homeScrLink);
            this.isHomeAppLoaded = true;
        } else if (!this.isComponentLoaded && !this.isHomeAppLoaded) {

            setTimeout(this.loadHomeApp, 100);
            return <span/>;
        }

        if (this.state.currentOpenedScreen !== 'home-app') {
            this.setState({ currentOpenedScreen: 'home-app' });
        }

        return <span/>;
    }

    loadSectionApp() {

        if (this.num > 30) { return <span/>; }

        if (this.isComponentLoaded && !this.isSectionAppLoaded) {

            sectionAppConnect(this.appContentElem, this.props.pagesLink.sectionScrLink);
            this.isSectionAppLoaded = true;

        } else if (!this.isComponentLoaded && !this.isSectionAppLoaded) {

            setTimeout(this.loadSectionApp, 100);
            return <span/>;
        }

        if (this.state.currentOpenedScreen !== 'section') {
            this.setState({ currentOpenedScreen: 'section' });
        }

        return <span/>;
    }

    loadSectionsApp() {

        if (this.isComponentLoaded) {
            return homeAppConnect(this.appContentElem, this.props.pagesLink.homeScrLink);
        } else {
            setTimeout(this.loadSectionsApp, 100);
            return null;
        }
    }

    render() {

        return (
            <HashRouter>
                <div className={'app' + (this.state.currentOpenedScreen ? ` ${this.state.currentOpenedScreen}__screen` : null)}>
                    <Header />
                    <SideBar />

                    <div className="app-content" ref={AppContentElem => this.appContentElem = AppContentElem}/>
                    <Switch>
                        <Route exact path="/" component={() => this.loadHomeApp()} />
                        <Route path="/sections" component={sections} />
                        <Route path="/section" component={() => this.loadSectionApp()} />
                        <Route component={error404} />
                    </Switch>

                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

if (process.env !== 'production') {

    MainApp.propTypes = {
        pagesLink: PropTypes.object.isRequired
    };
}

export default MainApp;
