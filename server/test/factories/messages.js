var faker = require('faker');

function messageFactory(factoryGirl) {
    factoryGirl.sequence('seq_message_id', function (id) {
        return id;
    });

    factoryGirl.define('message', function () {
        this.sequence('seq_message_id', 'id');
        this.sender = faker.name.jobArea();
        this.receiver = faker.name.jobArea();
        this.message = faker.lorem.paragraph();
        this.sending_time = faker.random.number();
    });
}

module.exports = messageFactory;
