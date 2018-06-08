
import React from 'react';

import Header from '../../components/header/Header';
import SideBar from '../../components/side-bar/SideBar';
import HomeApp from '../../home-app/HomeApp';
import Footer from '../../components/footer/Footer';

import './App.scss';

class App extends React.Component {

    render() {

        return (
            <div className="app">
                <Header />
                <SideBar />
                <HomeApp />
                <Footer />
            </div>
        );
    }
}

export default App;
