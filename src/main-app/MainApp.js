
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import SideBar from '../components/side-bar/SideBar';
import Footer from '../components/footer/Footer';
import error404 from '../components/404/error404';
// import HomeAppConnect from '../screens/home-app/HomeAppConnect.jsx';

import './MainApp.scss';

// const test = () => {

// {/*<div id="home-app-container">*/}
//     {/*<div className="before-load-component"/>*/}
// {/*</div>*/}
// {/*<Route*/}
//     {/*exact*/}
//     {/*path="/"*/}
//     {/*component={() => <HomeAppConnect scrLink={this.props.pagesLink.homeScrLink}/>}*/}
// {/*/>*/}
// return <span/>;
// };
const sections = () => {
    return <p>Sections</p>;
};
const section = () => {
    return <p>Section</p>;
};

class MainApp extends React.Component {

    constructor(props) {
        super(props);

        this.test = this.test.bind(this);
    }

    componentDidMount() {
        this.l = true;
    }

    test() {

        if (this.l) {
            if (!window.homeAppIsLoaded) {

                log.check('LOADING...');

                const d = document.createElement('div');
                d.id = 'home-app-container';
                d.innerHTML = '<div class="before-load-component"></div>';
                this.kek.appendChild(d);

                const scr = document.createElement('script');
                scr.type = 'text/javascript';
                scr.async = true;
                scr.id = 'home-app-scr';
                scr.src = this.props.pagesLink.homeScrLink;
                scr.onload = () => {
                    window.homeAppIsLoaded = true;
                };

                document.getElementsByTagName('body')[0].appendChild(scr);
            }
        } else {
            log.check(':)');
            setTimeout(this.test, 100);
        }

        return <span/>;
    }

    render() {

        return (
            <HashRouter>
                <div className="app">
                    <Header />
                    <SideBar />

                    <div ref={Kek => this.kek = Kek}/>
                    <Switch>
                        <Route exact path="/" component={() => this.test()} />
                        <Route path="/sections" component={sections} />
                        <Route path="/section" component={section} />
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

// {/*<div id="home-app-container" />*/}
// {/*<div id="sections-app-container" />*/}
// {/*<div id="section-app-container" />*/}
