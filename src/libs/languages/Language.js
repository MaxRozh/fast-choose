class Language {
  constructor(language) {
    this.locale = language._locale;
    this.messages = language.msg;

    Language.getTextById = Language.getTextById.bind(this);
  }

  static getTextById(id) {
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id == id) {
        if (this.messages[i].text.match('\n')) {
          let res = this.messages[i].text.split('\n');

          for (let k = 0; k < res.length; k++) {
            res[k] = res[k].replace(/amp;/g, '');
          }

          return res.join('</br>');
        }

        return this.messages[i].text.replace(/amp;/g, '');
      }
    }
  }
}

export default Language;
