
/* eslint-disable */

import React from 'react';

// class Test extends React.Component {
//
//     constructor(props) {
//         super(props);
//         log.warn('CREATE TEST ATEATS ADSAD ');
//     }
//
//     render() {
//         return <div id="section-app-container">
//             <div className="before-load-component" />
//         </div>;
//     }
// }
//
// const sectionAppConnect = (contentElement, sectionScrLink) => {
//
//     log.warn('asdasd', sectionScrLink);
//
//     if (!window.globalWorkerState.sectionAppIsLoaded) {
//
//         // const sectionAppContainer = document.createElement('div');
//         const sectionAppContainer = <Test/>;
//         const scr = document.createElement('script');
//
//         // sectionAppContainer.id = 'section-app-container';
//         // sectionAppContainer.innerHTML = '<div class="before-load-component"></div>';
//
//         // contentElement.appendChild(sectionAppContainer);
//
//         scr.type = 'text/javascript';
//         scr.async = true;
//         scr.id = 'section-app-scr';
//         scr.src = sectionScrLink;
//
//         document.getElementsByTagName('body')[0].appendChild(scr);
//
//         log.warn('TEST', sectionAppContainer);
//
//         return <Test/>;
//     }
// };

class SectionAppConnect extends React.Component {

    constructor(props) {
        super(props);

        this.contentElement = this.props.contentElement;
        this.sectionScrLink = this.props.sectionScrLink;

        log.warn('REALLY>???');

        if (!window.globalWorkerState.sectionAppIsLoaded) {

            // const sectionAppContainer = document.createElement('div');
            // const sectionAppContainer = <Test/>;
            const scr = document.createElement('script');

            // sectionAppContainer.id = 'section-app-container';
            // sectionAppContainer.innerHTML = '<div class="before-load-component"></div>';

            // contentElement.appendChild(sectionAppContainer);

            scr.type = 'text/javascript';
            scr.async = true;
            scr.id = 'section-app-scr';
            scr.src = this.sectionScrLink;

            document.getElementsByTagName('body')[0].appendChild(scr);
        }
    }

    render() {
        return <div id="section-app-container">
            <div className="before-load-component" />
        </div>;
    }
}

export default SectionAppConnect;
