var _ = require('lodash');

function serializeArticle(article) {
    if (!article || !_.isObject(article)) {
        return null;
    }

    return {
        id: article.id,
        name: article.name,
        author: article.author,
        discipline: article.discipline,
        article: article.article
    };
}

function serializeArticles(articles) {
    if (!articles || !_.isFunction(articles.map)) {
        return null;
    }

    return articles.map(function (article) {
        return serializeArticle(article);
    });
}

module.exports = {
    serializeOne: serializeArticle,
    serializeMany: serializeArticles
};
