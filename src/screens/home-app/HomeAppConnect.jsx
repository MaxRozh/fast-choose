
import React from 'react';
import PropTypes from 'prop-types';

class HomeAppConnect extends React.Component {

    componentDidMount() {

        if (!window.homeAppIsLoaded) {

            log.check('LOADING SRC');

            const scr = document.createElement('script');
            scr.type = 'text/javascript';
            scr.async = true;
            scr.id = 'home-app-scr';
            scr.src = this.props.scrLink;
            scr.onload = () => {
                window.homeAppIsLoaded = true;
            };

            document.getElementsByTagName('body')[0].appendChild(scr);
        }
    }

    componentWillUnmount() {

        log.check('UNMOUNT');

        window.homeAppIsLoaded = false;
        const test = document.getElementById('home-app-scr');
        document.getElementsByTagName('body')[0].removeChild(test);
    }

    render() {
        return <div id="home-app-container">
            <div className="before-load-component"/>
        </div>;
    }
}

if (process.env !== 'production') {

    HomeAppConnect.propTypes = {
        scrLink: PropTypes.string.isRequired
    };
}

export default HomeAppConnect;
