
import Language from '../languages/Language.js';

import createCommonText from './creators/createCommonText.js';
import createLoginText from './creators/createLoginText.js';

class TextCreator {

    constructor(language) {
        new Language(language);
    }

    static createHomeAppText() {

        return {
            common: createCommonText()
        };
    }

    static createLoginText() {

        return {
            text: createLoginText()
        };
    }
}

export default TextCreator;
