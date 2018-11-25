import Language from '../../languages/Language';

const createCommonText = () => {
  return {
    placeholder: Language.getTextById('common.placeholder'),
    greeting: Language.getTextById('common.greeting'),
    guest: Language.getTextById('common.guest'),
    ad: Language.getTextById('common.ad'),
    banner: Language.getTextById('common.banner'),
    articles: Language.getTextById('common.articles'),
    search: Language.getTextById('common.search'),
    news: Language.getTextById('common.news'),
    noResults: Language.getTextById('common.no-results'),
  };
};

export default createCommonText;
