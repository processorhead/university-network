var groupSerializer = require('../../app/serializers/group');
var expect = require('chai').expect;
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('GroupSerializer', function () {
    var buildGroup = function (group) {
        return _.clone(group);
    };

    var group = FactoryGirl.create('group').attributes();
    var expectedGroup = buildGroup(group);

    describe('#serializeOne(group)', function () {
        it('is a function', function () {
            expect(groupSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when group is invalid', function () {
            it('returns null', function () {
                expect(groupSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when group is valid', function () {
            it('returns null', function () {
                expect(groupSerializer.serializeOne(group)).to.deep.equal(expectedGroup);
            });
        });
    });

    describe('#serializeMany(groups)', function () {
        it('is a function', function () {
            expect(groupSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when groups are invalid', function () {
            it('returns null', function () {
                expect(groupSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when groups are valid', function () {
            var groups = FactoryGirl.createLists('group');
            var expectedGroups = _.map(groups, buildGroup);

            it('returns serializes users', function () {
                expect(groupSerializer.serializeMany(groups)).to.deep.equal(expectedGroups);
            });
        });
    });

});
