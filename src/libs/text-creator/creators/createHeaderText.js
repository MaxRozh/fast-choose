import Language from '../../languages/Language';

const createLoginText = () => {
  return {
    loginPlaceholder: Language.getTextById('login.placeholder'),
    commonPlaceholder: Language.getTextById('common.placeholder'),
    login: Language.getTextById('header.login'),
    signUp: Language.getTextById('header.signUp'),
    logout: Language.getTextById('header.logout'),
    search: Language.getTextById('common.search'),
    hi: Language.getTextById('common.greeting'),
    guest: Language.getTextById('common.guest'),
  };
};

export default createLoginText;
