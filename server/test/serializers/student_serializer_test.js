var studentSerializer = require('../../app/serializers/student');
var expect = require('chai').expect;
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('StudentSerializer', function () {
    var buildStudent = function (student) {
        return _.clone(student);
    };

    var student = FactoryGirl.create('student').attributes();
    var expectedStudent = buildStudent(student);

    describe('#serializeOne(student)', function () {
        it('is a function', function () {
            expect(studentSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when student is invalid', function () {
            it('returns null', function () {
                expect(studentSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when student is valid', function () {
            it('returns null', function () {
                expect(studentSerializer.serializeOne(student)).to.deep.equal(expectedStudent);
            });
        });
    });

    describe('#serializeMany(students)', function () {
        it('is a function', function () {
            expect(studentSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when students are invalid', function () {
            it('returns null', function () {
                expect(studentSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when students are valid', function () {
            var students = FactoryGirl.createLists('student');
            var expectedStudents = _.map(students, buildStudent);

            it('returns serializes users', function () {
                expect(studentSerializer.serializeMany(students)).to.deep.equal(expectedStudents);
            });
        });
    });

});

