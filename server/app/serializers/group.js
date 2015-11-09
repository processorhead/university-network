var _ = require('lodash');

function serializeGroup(group) {
    if (!group || !_.isObject(group)) {
        return null;
    }

    return {
        id: group.id,
        cipher: group.cipher,
        mentor: group.mentor
    };
}

function serializeGroups(groups) {
    if (!groups || !_.isFunction(groups.map)) {
        return null;
    }

    return groups.map(function (group) {
        return serializeGroup(group);
    });
}

module.exports = {
    serializeOne: serializeGroup,
    serializeMany: serializeGroups
};
