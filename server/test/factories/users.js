var faker = require('faker');

function userFactory(factoryGirl) {
    factoryGirl.sequence('seq_user_id', function (id) {
        return id;
    });

    factoryGirl.define('user', function () {
        this.sequence('seq_user_id', 'id');
        this.name = faker.name.findName();
        this.photo = faker.image.imageUrl();
        this.email = faker.internet.email();
        this.role = 'student';
    });
}

module.exports = userFactory;
