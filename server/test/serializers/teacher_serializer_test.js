var teacherSerializer = require('../../app/serializers/teacher');
var expect = require('chai').expect;
var _ = require('lodash');
var FactoryGirl = require('../factories');

describe('TeacherSerializer', function () {
    var buildTeacher = function (teacher) {
        return _.clone(teacher);
    };

    var teacher = FactoryGirl.create('teacher').attributes();
    var expectedTeacher = buildTeacher(teacher);

    describe('#serializeOne(teacher)', function () {
        it('is a function', function () {
            expect(teacherSerializer).to.has.property('serializeOne').that.is.a('function');
        });

        describe('when teacher is invalid', function () {
            it('returns null', function () {
                expect(teacherSerializer.serializeOne(null)).to.be.equal(null);
            });
        });

        describe('when teacher is valid', function () {
            it('returns null', function () {
                expect(teacherSerializer.serializeOne(teacher)).to.deep.equal(expectedTeacher);
            });
        });
    });

    describe('#serializeMany(teachers)', function () {
        it('is a function', function () {
            expect(teacherSerializer).to.has.property('serializeMany').that.is.a('function');
        });

        describe('when teachers are invalid', function () {
            it('returns null', function () {
                expect(teacherSerializer.serializeMany(null)).to.be.equal(null);
            });
        });

        describe('when teachers are valid', function () {
            var teachers = FactoryGirl.createLists('teacher');
            var expectedTeachers = _.map(teachers, buildTeacher);

            it('returns serializes users', function () {
                expect(teacherSerializer.serializeMany(teachers)).to.deep.equal(expectedTeachers);
            });
        });
    });

});

