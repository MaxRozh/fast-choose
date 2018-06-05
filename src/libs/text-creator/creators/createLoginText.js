
import Language from '../../languages/Language.js';

const createLoginText = () => {

    return {
        placeholder: Language.getTextById('login.placeholder')
    };
};

export default createLoginText;
