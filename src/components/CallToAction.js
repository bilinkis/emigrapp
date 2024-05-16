const CallToAction = () => {
    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-4">¡Contáctanos hoy mismo!</h2>
                <p className="text-lg mb-8">Obtén una consulta gratuita y comienza tu nueva vida en el extranjero con nuestro apoyo experto.</p>
                <a href="mailto:info@emigrapp.com" className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-200">
                    Contactar
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
