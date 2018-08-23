
import Promise from 'promise-polyfill';

const getHomeAppStore = () => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/server/sectionInfo.json');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const languageXhr = new XMLHttpRequest();
                let sectionAppStore = JSON.parse(xhr.responseText);

                languageXhr.open('GET', '/server/' + sectionAppStore.lang + '.json');
                languageXhr.onload = () => {

                    if (xhr.status === 200) {

                        sectionAppStore.language = JSON.parse(languageXhr.responseText);

                        resolve(sectionAppStore);

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
