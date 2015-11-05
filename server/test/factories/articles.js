var faker = require('faker');

function articleFactory(factoryGirl) {
    factoryGirl.sequence('seq_article_id', function (id) {
        return id;
    });

    factoryGirl.define('article', function () {
        this.sequence('seq_article_id', 'id');
        this.name = faker.hacker.phrase();
        this.author = faker.name.findName();
        this.discipline = faker.name.jobArea();
        this.article = faker.lorem.paragraph();
    });
}

module.exports = articleFactory;
