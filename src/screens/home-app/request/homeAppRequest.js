
import Promise from 'promise-polyfill';

import sort from '../../../libs/sort.js';

const getHomeAppStore = () => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/server/homeInfo.json');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const languageXhr = new XMLHttpRequest();
                let homeAppStore = JSON.parse(xhr.responseText);
                homeAppStore.articles = sort(homeAppStore.articles);

                languageXhr.open('GET', '/server/' + homeAppStore.lang + '.json');
                languageXhr.onload = () => {

                    if (xhr.status === 200) {

                        homeAppStore.language = JSON.parse(languageXhr.responseText);

                        resolve(homeAppStore);

                    } else {

                        console.error('Error in request. Status: ' + xhr.status);
                        console.error('Response text: ' + xhr.responseText);

                        reject(new Error());
                    }
                };
                languageXhr.send(null);

            } else {

                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);

                reject(new Error());
            }
        };
        xhr.send(null);
    });
};

export default getHomeAppStore;
