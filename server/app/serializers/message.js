var _ = require('lodash');

function serializeMessage(message) {
    if (!message || !_.isObject(message)) {
        return null;
    }

    return {
        id: message.id,
        sender: message.sender,
        receiver: message.receiver,
        message: message.message,
        sending_time: message.sending_time
    };
}

function serializeMessages(messages) {
    if (!messages || !_.isFunction(messages.map)) {
        return null;
    }

    return messages.map(function (message) {
        return serializeMessage(message);
    });
}

module.exports = {
    serializeOne: serializeMessage,
    serializeMany: serializeMessages
};
