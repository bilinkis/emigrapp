import React, { useState } from 'react';
import Sidebar from 'src/components/comunidad/Sidebar';
import Chat from 'src/components/comunidad/Chat';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const App = () => {
    const [activeChannel, setActiveChannel] = useState('general');

    return (
        <div>
            <Head />

            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
                    <Chat activeChannel={activeChannel} />
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default App;
