var faker = require('faker');

function disciplineFactory(factoryGirl) {
    factoryGirl.sequence('seq_discipline_id', function (id) {
        return id;
    });

    factoryGirl.define('discipline', function () {
        this.sequence('seq_discipline_id', 'id');
        this.name = faker.name.jobArea();
    });
}

module.exports = disciplineFactory;
