import React from 'react';
import Post from './Post';

const posts = {
    planning: [
        { id: 1, user: 'Alice', title: 'How to start planning your emigration', content: 'Here are some tips to get started with planning your move to a new country.' },
        { id: 2, user: 'Bob', title: 'Creating a checklist for emigration', content: 'A detailed checklist to ensure you don’t miss any crucial steps in your emigration process.' },
    ],
    legal: [
        { id: 3, user: 'Charlie', title: 'Understanding visa requirements', content: 'A guide to help you understand the various visa requirements and processes.' },
    ],
    settling: [
        { id: 4, user: 'Dave', title: 'Finding a home in a new country', content: 'Tips and resources for finding a place to live when you move abroad.' },
    ],
    jobs: [
        { id: 5, user: 'Eve', title: 'Job hunting tips for immigrants', content: 'Advice on how to search for and secure a job in a new country.' },
    ],
};

const PostList = ({ activeCategory, onSelectPost }) => {
    return (
        <div className="flex-1 bg-gray-900 text-white flex flex-col">
            <div className="p-4 font-bold text-lg border-b border-gray-700">{activeCategory}</div>
            <div className="flex-1 overflow-y-scroll p-4">
                {(posts[activeCategory] || []).map((post) => (
                    <div key={post.id} onClick={() => onSelectPost(post)}>
                        <Post post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
