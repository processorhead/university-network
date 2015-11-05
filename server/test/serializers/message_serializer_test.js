var messageSerializer = require('../../app/serializers/message');
var expect = require('chai').expect;
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('MessageSerializer', function () {
    var buildMessage = function (message) {
        return _.clone(message);
    };

    var message = FactoryGirl.create('message').attributes();
    var expectedMessage = buildMessage(message);

    describe('#serializeOne(message)', function () {
        it('is a function', function () {
            expect(messageSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when message is invalid', function () {
            it('returns null', function () {
                expect(messageSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when message is valid', function () {
            it('returns null', function () {
                expect(messageSerializer.serializeOne(message)).to.deep.equal(expectedMessage);
            });
        });
    });

    describe('#serializeMany(messages)', function () {
        it('is a function', function () {
            expect(messageSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when messages are invalid', function () {
            it('returns null', function () {
                expect(messageSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when messages are valid', function () {
            var messages = FactoryGirl.createLists('message');
            var expectedMessages = _.map(messages, buildMessage);

            it('returns serializes users', function () {
                expect(messageSerializer.serializeMany(messages)).to.deep.equal(expectedMessages);
            });
        });
    });

});

