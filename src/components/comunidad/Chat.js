import React, { useState } from 'react';
import Message from './Message';

const Chat = ({ activeChannel }) => {
    const [messages, setMessages] = useState([
        { id: 1, user: 'Alice', text: 'Hello!' },
        { id: 2, user: 'Bob', text: 'Hi there!' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, user: 'You', text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div className="flex-1 bg-gray-900 text-white flex flex-col">
            <div className="p-4 font-bold text-lg border-b border-gray-700">#{activeChannel}</div>
            <div className="flex-1 overflow-y-scroll p-4">
                {messages.map((msg) => (
                    <Message key={msg.id} message={msg} />
                ))}
            </div>
            <div className="p-4 border-t border-gray-700 flex">
                <input
                    type="text"
                    className="flex-1 p-2 bg-gray-800 text-white rounded focus:outline-none"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                    className="ml-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
