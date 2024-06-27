import React, { useState } from 'react';
import Sidebar from 'src/components/comunidad/foro/Sidebar';
import PostList from 'src/components/comunidad/foro/PostList';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import PostDetails from 'src/components/comunidad/foro/PostDetails';

const App = () => {
    const [activeCategory, setActiveCategory] = useState('planning');
    const [selectedPost, setSelectedPost] = useState(null);
    return (
        <div>
            <Head />

            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar
                        activeCategory={activeCategory}
                        setActiveCategory={(category) => {
                            setActiveCategory(category);
                            setSelectedPost(null);
                        }}
                    />
                    {selectedPost ? (
                        <PostDetails post={selectedPost} onBack={() => setSelectedPost(null)} />
                    ) : (
                        <PostList activeCategory={activeCategory} onSelectPost={setSelectedPost} />
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
