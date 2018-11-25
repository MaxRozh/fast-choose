import Language from '../languages/Language';

import createCommonText from './creators/createCommonText';
import createHeaderText from './creators/createHeaderText';
import createFooterText from './creators/createFooterText';
import createSideBarText from './creators/createSideBarText';

class TextCreator {
  constructor(language) {
    new Language(language);
  }

  static createHomeAppText() {
    return {
      common: createCommonText(),
    };
  }

  static createHeaderText() {
    return createHeaderText();
  }

  static createFooterText() {
    return createFooterText();
  }

  static createSideBarText() {
    return createSideBarText();
  }
}

export default TextCreator;
