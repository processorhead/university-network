var faker = require('faker');

function studentFactory(factoryGirl) {
    factoryGirl.sequence('seq_student_id', function (id) {
        return id;
    });

    factoryGirl.define('student', function () {
        this.sequence('seq_student_id', 'id');
        this.group = faker.name.jobArea();
        this.name = faker.name.findName();
        this.email = faker.internet.email();
    });
}

module.exports = studentFactory;
