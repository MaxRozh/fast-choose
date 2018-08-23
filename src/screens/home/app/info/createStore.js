
const createStore = (params) => {

    return {
        articles: params.articles,
        banners: params.banners,
        clientPreference: params.clientPreference,
        news: params.news,
        text: params.text.homeAppText,
        isSearching: false,
        searchingElements: []
    };
};

export default createStore;
