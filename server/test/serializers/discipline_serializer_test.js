var disciplineSerializer = require('../../app/serializers/discipline');
var expect = require('chai').expect;
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('DisciplineSerializer', function () {
    var buildDiscipline = function (discipline) {
        return _.clone(discipline);
    };

    var discipline = FactoryGirl.create('discipline').attributes();
    var expectedDiscipline = buildDiscipline(discipline);

    describe('#serializeOne(discipline)', function () {
        it('is a function', function () {
            expect(disciplineSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when discipline is invalid', function () {
            it('returns null', function () {
                expect(disciplineSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when discipline is valid', function () {
            it('returns null', function () {
                expect(disciplineSerializer.serializeOne(discipline)).to.deep.equal(expectedDiscipline);
            });
        });
    });

    describe('#serializeMany(disciplines)', function () {
        it('is a function', function () {
            expect(disciplineSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when disciplines are invalid', function () {
            it('returns null', function () {
                expect(disciplineSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when disciplines are valid', function () {
            var disciplines = FactoryGirl.createLists('discipline');
            var expectedDisciplines = _.map(disciplines, buildDiscipline);

            it('returns serializes users', function () {
                expect(disciplineSerializer.serializeMany(disciplines)).to.deep.equal(expectedDisciplines);
            });
        });
    });

});
