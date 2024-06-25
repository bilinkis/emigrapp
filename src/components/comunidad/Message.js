import React from 'react';

const Message = ({ message }) => {
    return (
        <div className="mb-4">
            <div className="font-bold">{message.user}</div>
            <div>{message.text}</div>
        </div>
    );
};

export default Message;
