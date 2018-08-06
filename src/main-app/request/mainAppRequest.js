
import Promise from 'promise-polyfill';

const getMainAppStore = () => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/server/main.json');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const languageXhr = new XMLHttpRequest();
                const mainAppStore = JSON.parse(xhr.responseText).mainParams;

                languageXhr.open('GET', '/server/' + mainAppStore.lang + '.json');
                languageXhr.onload = () => {

                    if (xhr.status === 200) {

                        mainAppStore.language = JSON.parse(languageXhr.responseText);

                        resolve(mainAppStore);

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

export default getMainAppStore;
