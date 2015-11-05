var _ = require('lodash');

function serializeDiscipline(discipline) {
    if (!discipline || !_.isObject(discipline)) {
        return null;
    }

    return {
        id: discipline.id,
        name: discipline.name
    };
}

function serializeDisciplines(disciplines) {
    if (!disciplines || !_.isFunction(disciplines.map)) {
        return null;
    }

    return disciplines.map(function (discipline) {
        return serializeDiscipline(discipline);
    });
}

module.exports = {
    serializeOne: serializeDiscipline,
    serializeMany: serializeDisciplines
};


