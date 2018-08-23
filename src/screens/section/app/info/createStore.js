
const createStore = (params) => {

    return {
        section: params.section,
        clientPreference: params.clientPreference,
        // text: params.text.homeAppText,
        isSearching: false,
        searchingElements: []
    };
};

export default createStore;
