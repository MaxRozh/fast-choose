
class News {

    constructor(name, date, parentLink, link, isAd, imgLink, description) {
        this.name = name;
        this.date = date;
        this.ad = isAd;
        this.parentLink = parentLink;
        this.link = link;
        this.imgLink = imgLink;
        this.description = description;
    }
}

module.exports = News;
