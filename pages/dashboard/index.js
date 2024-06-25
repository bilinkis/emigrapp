import React from 'react';
import Dashboard from 'src/components/dashboard/Dashboard';
import Head from 'next/head';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Emigrapp - Dashboard</title>
                <meta name="description" content="Acompañamos todo tu proceso de emigración." />
                <link rel="icon" href="/icon.ico" />
            </Head>

            <Header />

            <div className="flex-grow flex flex-col">
                <Dashboard />
            </div>

            <Footer />
        </div>
    );
};

export default App;
