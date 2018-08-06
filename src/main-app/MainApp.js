
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import SideBar from '../components/side-bar/SideBar';
import Footer from '../components/footer/Footer';
import error404 from '../components/404/error404';

import homeAppConnect from '../screens/home-app/homeAppConnect.js';
import SectionAppConnect from '../screens/section/sectionAppConnect.js';

import './MainApp.scss';

const sections = () => {
    return <p>Sections</p>;
};

class MainApp extends React.Component {

    constructor(props) {
        super(props);

        this.isComponentLoaded = false;

        this.sectionApp = null;

        this.loadHomeApp = this.loadHomeApp.bind(this);
        this.loadSectionsApp = this.loadSectionsApp.bind(this);
        this.loadSectionApp = this.loadSectionApp.bind(this);
    }

    componentDidMount() {
        this.isComponentLoaded = true;
    }

    loadHomeApp() {

        if (this.isComponentLoaded) {
            homeAppConnect(this.appContentElem, this.props.pagesLink.homeScrLink);
        } else {
            setTimeout(this.loadHomeApp, 100);
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

    loadSectionApp() {

        if (this.isComponentLoaded) {
            log.warn('1111111111');

            if (this.sectionApp) {
                return this.sectionApp;
            } else {
                this.sectionApp = <SectionAppConnect contentElement={this.appContentElem} sectionScrLink={this.props.pagesLink.sectionScrLink}/>;
                return this.sectionApp;
            }

        } else {
            log.check('22222222222222');
            setTimeout(this.loadSectionApp, 100);
            return null;
        }
    }

    render() {

        return (
            <HashRouter>
                <div className="app">
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
