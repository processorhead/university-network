var _ = require('lodash');

function serializeStudent(student) {
    if (!student || !_.isObject(student)) {
        return null;
    }

    return {
        id: student.id,
        group: student.group,
        name: student.name,
        email: student.email
    };
}

function serializeStudents(students) {
    if (!students || !_.isFunction(students.map)) {
        return null;
    }

    return students.map(function (student) {
        return serializeStudent(student);
    });
}

module.exports = {
    serializeOne: serializeStudent,
    serializeMany: serializeStudents
};
