import React from 'react';
import Dashboard from 'src/components/dashboard/Dashboard';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head />

            <Header />

            <div className="flex-grow flex flex-col">
                <Dashboard />
            </div>

            <Footer />
        </div>
    );
};

export default App;
