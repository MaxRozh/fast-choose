
class Article {

    constructor(name, link, description, colors) {
        this.name = name;
        this.link = link;
        this.description = description;
        this.colors = colors;
        this.koef = Math.random() * (0.9 - 0.1) + 0.1;
    }
}

module.exports = Article;
