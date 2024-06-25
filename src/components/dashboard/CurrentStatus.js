import React from 'react';

const CurrentStatus = ({ status }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Current Status</h2>
            <div className="bg-gray-800 rounded p-4">
                <p className="text-lg">{status}</p>
                <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Progress: 50%</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentStatus;
