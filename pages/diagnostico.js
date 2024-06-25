import Head from 'next/head';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Form from "../src/components/Form";

export default function Diagnostico() {
    return (
        <div>
            <Head>
                <title>Emigrapp - Autodiagnóstico</title>
                <meta name="description" content="Acompañamos todo tu proceso de emigración." />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Header />
            <main className='grow'>
                <Form />
            </main>
            <Footer />
        </div>
    )
}
