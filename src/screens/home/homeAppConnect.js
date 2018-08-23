
const homeAppConnect = (contentElement, homeScrLink) => {

    if (!window.globalWorker.state.homeAppIsLoaded) {

        const homeAppContainer = document.createElement('div');
        const scr = document.createElement('script');

        homeAppContainer.id = 'home-app-container';
        homeAppContainer.innerHTML = '<div class="before-load-component"></div>';

        contentElement.appendChild(homeAppContainer);

        scr.type = 'text/javascript';
        scr.async = true;
        scr.id = 'home-app-scr';
        scr.src = homeScrLink;

        document.getElementsByTagName('body')[0].appendChild(scr);

        return homeAppContainer;
    }
};

export default homeAppConnect;
