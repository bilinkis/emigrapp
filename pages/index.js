import Head from 'src/components/Head';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Pricing from '../src/components/Pricing';
import Testimonials from '../src/components/Testimonials';
import CallToAction from '../src/components/CallToAction';
import Footer from '../src/components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Head />
            <Header />
            <main>
                <About />
                <CallToAction />
                <Pricing />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}
