import Language from '../../languages/Language';

const createLoginText = () => {
  return {
    noSaved: Language.getTextById('sidebar.no-saved'),
  };
};

export default createLoginText;
