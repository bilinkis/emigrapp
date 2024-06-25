import React from 'react';

const channels = ['general', 'random', 'help'];

const Sidebar = ({ activeChannel, setActiveChannel }) => {
    return (
        <div className="w-1/4 bg-black text-white flex flex-col">
            <div className="p-4 font-bold text-lg">Channels</div>
            {channels.map((channel) => (
                <div
                    key={channel}
                    className={`p-4 cursor-pointer ${activeChannel === channel ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                    onClick={() => setActiveChannel(channel)}
                >
                    #{channel}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
