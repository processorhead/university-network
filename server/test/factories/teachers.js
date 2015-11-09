var faker = require('faker');

function teacherFactory(factoryGirl) {
    factoryGirl.sequence('seq_teacher_id', function (id) {
        return id;
    });

    factoryGirl.define('teacher', function () {
        this.sequence('seq_teacher_id', 'id');
        this.name = faker.name.jobArea();
        this.email = faker.internet.email();
    });
}

module.exports = teacherFactory;
