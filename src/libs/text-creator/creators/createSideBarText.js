
import Language from '../../languages/Language.js';

const createLoginText = () => {

    return {
        noSaved: Language.getTextById('sidebar.no-saved')
    };
};

export default createLoginText;
