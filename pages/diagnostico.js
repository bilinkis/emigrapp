import Head from "src/components/Head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Form from "../src/components/Form";

export default function Diagnostico() {
  return (
    <div className="min-h-screen">
      <Head />
      <Header />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
