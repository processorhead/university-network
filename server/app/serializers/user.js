var jwt = require('../../lib/token');
var _ = require('lodash');

function serializeUser(user) {
    if (!user || !_.isObject(user)) {
        return null;
    }

    return {
        id: user.id,
        name: user.name,
        photo: user.photo,
        email: user.email,
        role: user.role,
        token: generateToken(user)
    };
}

function serializeUsers(users) {
    if (!users || !_.isFunction(users.map)) {
        return null;
    }

    return users.map(function (user) {
        return serializeUser(user);
    });
}

function generateToken(user) {
    var payload = {
        id: user.id,
        role: user.role
    };

    return jwt.generate(payload);
}

module.exports = {
    serializeOne: serializeUser,
    serializeMany: serializeUsers
};
