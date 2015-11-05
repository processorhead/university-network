var articleSerializer = require('../../app/serializers/article');
var expect = require('chai').expect;
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('ArticleSerializer', function () {
    var buildArticle = function (article) {
        return _.clone(article);
    };

    var article = FactoryGirl.create('article').attributes();
    var expectedArticle = buildArticle(article);

    describe('#serializeOne(article)', function () {
        it('is a function', function () {
            expect(articleSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when article is invalid', function () {
            it('returns null', function () {
                expect(articleSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when article is valid', function () {
            it('returns null', function () {
                expect(articleSerializer.serializeOne(article)).to.deep.equal(expectedArticle);
            });
        });
    });

    describe('#serializeMany(articles)', function () {
        it('is a function', function () {
            expect(articleSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when articles are invalid', function () {
            it('returns null', function () {
                expect(articleSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when articles are valid', function () {
            var articles = FactoryGirl.createLists('article');
            var expectedArticles = _.map(articles, buildArticle);

            it('returns serializes users', function () {
                expect(articleSerializer.serializeMany(articles)).to.deep.equal(expectedArticles);
            });
        });
    });

});
