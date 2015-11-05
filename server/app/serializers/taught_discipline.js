var _ = require('lodash');

function serializeTaughtDiscipline(taught_discipline) {
    if (!taught_discipline || !_.isObject(taught_discipline)) {
        return null;
    }

    return {
        discipline: taught_discipline.discipline,
        group: taught_discipline.group,
        teacher: taught_discipline.teacher
    };
}

function serializeTaughtDisciplines(taught_disciplines) {
    if (!taught_disciplines || !_.isFunction(taught_disciplines.map)) {
        return null;
    }

    return taught_disciplines.map(function (taught_discipline) {
        return serializeTaughtDiscipline(taught_discipline);
    });
}

module.exports = {
    serializeOne: serializeTaughtDiscipline,
    serializeMany: serializeTaughtDisciplines
};

