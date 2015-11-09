var _ = require('lodash');

function serializeTeacher(teacher) {
    if (!teacher || !_.isObject(teacher)) {
        return null;
    }

    return {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email
    };
}

function serializeTeachers(teachers) {
    if (!teachers || !_.isFunction(teachers.map)) {
        return null;
    }

    return teachers.map(function (teacher) {
        return serializeTeacher(teacher);
    });
}

module.exports = {
    serializeOne: serializeTeacher,
    serializeMany: serializeTeachers
};

