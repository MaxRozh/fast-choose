
const sectionAppConnect = (contentElement, sectionScrLink) => {

    if (!window.globalWorker.state.sectionAppIsLoaded) {

        const sectionAppContainer = document.createElement('div');
        const scr = document.createElement('script');

        sectionAppContainer.id = 'section-app-container';
        sectionAppContainer.innerHTML = '<div class="before-load-component"></div>';

        contentElement.appendChild(sectionAppContainer);

        scr.type = 'text/javascript';
        scr.async = true;
        scr.id = 'section-app-scr';
        scr.src = sectionScrLink;

        document.getElementsByTagName('body')[0].appendChild(scr);

        return sectionAppContainer;
    }
};

export default sectionAppConnect;
