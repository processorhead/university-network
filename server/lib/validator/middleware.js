var validator = require('validator');
var validateJSON = require('jsonschema').validate;

function validateMiddleware(req, next, schema) {
    var paramTypes = ['params', 'query'];
    var errors = paramTypes.map(function (paramType) {
        if (schema.hasOwnProperty(paramType)) {
            return Object.keys(schema[paramType]).map(function (paramName) {
                return Object.keys(schema[paramType][paramName]).map(function (validatorName) {
                    var valueToValidate = req[paramType][paramName];
                    var validatorArguments = schema[paramType][paramName][validatorName].options;
                    var valid = validator[validatorName](valueToValidate, validatorArguments);
                    var errorMessage = 'Invalid param: ' + paramName;
                    return {
                        valid: valid,
                        paramName: paramName,
                        errorMessage: schema[paramType][paramName][validatorName].message || errorMessage
                    };
                });
            });
        }
    });

    if (schema.hasOwnProperty('body')) {
        var validationResult = validateJSON(req.body, schema.body);
        errors.concat(validationResult);
    }
    var flattenErrors = flatten(errors);
    var invalidParams = flattenErrors.filter(function (error) {
        return error && !error.valid;
    });
    if (invalidParams.length > 0) {
        var error = new Error;
        error.status = 400;
        error.errors = invalidParams;
        return next(error);
    }
    next();
}

function flatten(array) {
    var flat = [];
    for (var i = 0, l = array.length; i < l; i++) {
        var type = Object.prototype.toString.call(array[i]).split(' ').pop().split(']').shift().toLowerCase();
        if (type) {
            flat = flat.concat(/^(array|collection|arguments|object)$/.test(type) ? flatten(array[i]) : array[i]);
        }
    }
    return flat;
}

module.exports = validateMiddleware;
