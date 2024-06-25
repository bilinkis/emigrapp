import React from 'react';

const PostDetails = ({ post, onBack }) => {
    return (
        <div className="flex-1 bg-gray-900 text-white flex flex-col">
            <div className="p-4 border-b border-gray-700 flex items-center">
                <button className="mr-4 px-2 py-1 bg-blue-600 rounded hover:bg-blue-500" onClick={onBack}>
                    Back
                </button>
                <div className="font-bold text-lg">{post.title}</div>
            </div>
            <div className="flex-1 overflow-y-scroll p-4">
                <div className="mb-4 flex items-start">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                        className="w-32 h-32 mr-4 rounded"
                    />
                    <div>
                        <div className="font-bold text-lg">{post.title}</div>
                        <div className="text-sm text-gray-400">by {post.user}</div>
                    </div>
                </div>
                <div>{post.content}</div>
            </div>
        </div>
    );
};

export default PostDetails;
