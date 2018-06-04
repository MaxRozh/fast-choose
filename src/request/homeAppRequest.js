
import Promise from 'promise-polyfill';

import sort from './sort.js';

const getHomeAppStore = () => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/server/homeInfo.json');
        xhr.onload = () => {

            if (xhr.status === 200) {

                let homeAppStore = JSON.parse(xhr.responseText);
                homeAppStore.articles = sort(homeAppStore.articles);

                const languageXhr = new XMLHttpRequest();

                languageXhr.open('GET', '/server/' + homeAppStore.lang + '.json');

                languageXhr.onload = () => {

                    if (xhr.status === 200) {

                        homeAppStore.language = JSON.parse(languageXhr.responseText);

                        resolve(homeAppStore);

                    } else {

                        reject(new Error());

                        console.error('Error in request. Status: ' + xhr.status);
                        console.error('Response text: ' + xhr.responseText);
                    }
                };

                languageXhr.send(null);

            } else {

                reject(new Error());

                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);
            }
        };
        xhr.send(null);
    });
};

export default getHomeAppStore;
