
const Banner = require('./home-info-items/Banner');
const News = require('./home-info-items/News');
const Article = require('./home-info-items/Article');

class HomeInfoCollection {

    static createBanner(name, description, isAd, link, imgLink) {
        return new Banner(name, description, isAd, link, imgLink);
    }

    static createNews(name, date, parentLink, link, isAd, imgLink, description) {
        return new News(name, date, parentLink, link, isAd, imgLink, description);
    }

    static createArticle(name, link, description, colors) {
        return new Article(name, link, description, colors);
    }
}

module.exports = HomeInfoCollection;
