var disciplines = require('../models/disciplines');
var validator = require('../../lib/validator');

function getAllDisciplines(req, res, next) {
    disciplines.getAll(function (error, result) {
        if (error) {
            console.error('error running query', error);
            return next(error);
        }
        res.json(result.rows);
    });
}

function validateGroupSchedule(req, res, next) {
    var schema = {
        body: {
            type: 'object',
            required: ['group_id'],
            properties: {
                group_id: {
                    type: 'int'
                }
            }
        }
    };

    return validator.middleware(req, next, schema);
}

function validateDiscipline(req, res, next) {

    var schema = {
        body: {
            type: 'object',
            required: ['discipline'],
            properties: {
                article: {
                    type: 'object',
                    required: ['discipline_name'],
                    properties: {
                        discipline_name: {
                            type: 'string',
                            minLength: 3,
                            maxLength: 80
                        }
                    }
                }
            }
        }
    };

    return validator.middleware(req, next, schema);
}

function getGroupSchedule(req, res, next) {

    var params = {
        group_id: req.query.group_id
    };

    disciplines.getSchedule(params, function (error, result) {
        if (error) {
            console.error('error running query', error);
            return next(error);
        }
        res.json(result.rows);
    });
}

function createDiscipline(req, res, next) {
    var params = {
        name: req.body.discipline.discipline_name
    };

    disciplines.create(params, function (error, result) {
        if (error) {
            console.error('error running query', error);
            return next(error);
        }
        res.status(201);
        res.json(result.rows[0]);
    });
}

module.exports = {
    index: getAllDisciplines,
    create: [validateDiscipline, createDiscipline],
    schedule: [validateGroupSchedule, getGroupSchedule]
};
