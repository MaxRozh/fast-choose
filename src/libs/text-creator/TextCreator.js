
import Language from '../languages/Language.js';

import createCommonText from './creators/createCommonText.js';
import createLoginText from './creators/createLoginText.js';
import createFooterText from './creators/createFooterText.js';

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

    static createFooterText() {

        return {
            text: createFooterText()
        };
    }
}

export default TextCreator;
