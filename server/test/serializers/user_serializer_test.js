var expect = require('chai').expect;
var proxyquire = require('proxyquire').noCallThru();
var sinon = require('sinon');
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('UserSerializer', function () {
    var userSerializer;
    var tokenMock = sinon.stub().returns('token');
    var fakeModule = {
        '../../lib/token': {
            generate: tokenMock
        }
    };

    var buildUser = function (user) {
        return _.chain(user).clone().assign({token: 'token'}).value();
    };

    var user = FactoryGirl.create('user').attributes();
    var expectedUser = buildUser(user);

    before(function () {
        userSerializer = proxyquire('../../app/serializers/user', fakeModule);
    });

    describe('#serializeOne(user)', function () {
        it('is a function', function () {
            expect(userSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when user is invalid', function () {
            it('returns null', function () {
                expect(userSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when user is valid', function () {
            it('returns serialized user', function () {
                expect(userSerializer.serializeOne(user)).to.deep.equal(expectedUser);
                expect(tokenMock.called).to.be.true;
            });
        });
    });

    describe('#serializeMany(users)', function () {
        it('is a function', function () {
            expect(userSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when users are invalid', function () {
            it('returns null', function () {
                expect(userSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when users are valid', function () {
            var users = FactoryGirl.createLists('user');
            var expectedUsers = _.map(users, buildUser);

            it('returns serializes users', function () {
                expect(userSerializer.serializeMany(users)).to.deep.equal(expectedUsers);
                expect(tokenMock.called).to.be.true;
            });
        });
    });
});
