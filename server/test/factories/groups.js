var faker = require('faker');

function groupFactory(factoryGirl) {
    factoryGirl.sequence('seq_group_id', function (id) {
        return id;
    });

    factoryGirl.define('group', function () {
        this.sequence('seq_group_id', 'id');
        this.cipher = 'AB-'+faker.random.number();
        this.mentor = faker.name.findName();
    });
}

module.exports = groupFactory;
