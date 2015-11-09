var faker = require('faker');

function taughtDisciplineFactory(factoryGirl) {
    factoryGirl.define('taught_discipline', function () {
        this.discipline = faker.name.jobArea();
        this.teacher = faker.name.findName();
        this.group = 'AB' + faker.random.number();
    });
}

module.exports = taughtDisciplineFactory;
