import Head from 'next/head';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Testimonials from '../src/components/Testimonials';
import CallToAction from '../src/components/CallToAction';
import Footer from '../src/components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Emigrapp</title>
                <meta name="description" content="Acompañamos todo tu proceso de emigración." />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Header />
            <main>
                <About />
                <Testimonials />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}
