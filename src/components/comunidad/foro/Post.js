import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="mb-4 p-4 bg-gray-800 rounded cursor-pointer flex items-start">
            <img
                src="https://via.placeholder.com/150"
                alt="Placeholder"
                className="w-16 h-16 mr-4 rounded"
            />
            <div>
                <div className="font-bold text-lg">{post.title}</div>
                <div className="text-sm text-gray-400">by {post.user}</div>
                <div className="mt-2">{post.content}</div>
            </div>
        </div>
    );
};

export default Post;
