import Buy from "./Buy";

const Pricing = ({ route, suggested, setPaid }) => {
    return (
        <section id="pricing" className="py-16 pt-24 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800">
            <div className="container mx-auto text-center">
                {!route === "/diagnostico" && (<h2 className="text-4xl font-bold mb-6">Pricing</h2>)}

                <div className="flex flex-wrap justify-center">
                    {suggested === "full" ? (
                        <div className="flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/3">
                            <div className="pricing-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col">
                                <h2 className="text-2xl font-bold mb-4">Full</h2>
                                <p className="text-gray-600 mb-4">Nuestro plan más completo, ideal para todo tipo de necesidades.</p>
                                <p className="text-3xl font-bold mb-4">$1000</p>
                                <ul className="text-gray-600 flex-grow">
                                    <li className="mb-2">✓ Todas las funcionalidades del plan Premium</li>
                                    <li className="mb-2">✓ Solicitud de NIE y Ciudadanía para casos complejos.</li>
                                    <li className="mb-2">✓ Paso a paso del proceso emigratorio, avanzá por tu cuenta!</li>
                                </ul>
                                <Buy setPaid={setPaid} />
                            </div>
                        </div>

                    ) : suggested === "premium" ? (<div className="flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="pricing-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col">
                            <h2 className="text-2xl font-bold mb-4">Premium</h2>
                            <p className="text-gray-600 mb-4">Nuestro plan intermedio, ideal para procesos de complejidad intermedia.</p>
                            <p className="text-3xl font-bold mb-4">$150</p>
                            <ul className="text-gray-600 flex-grow">
                                <li className="mb-2">✓ Todas las funcionalidades del plan Basic</li>
                                <li className="mb-2">✓ Solicitud de NIE y Ciudadanía (si ya contas con la documentación)</li>
                                <li className="mb-2">✓ Acceso completo a nuestra comunidad</li>
                            </ul>
                            <Buy setPaid={setPaid} />
                        </div>
                    </div>) : (
                        <>
                            <div className="flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/3">
                                <div className="pricing-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col">
                                    <h2 className="text-2xl font-bold mb-4">Basic</h2>
                                    <p className="text-gray-600 mb-4">Nuestro plan más accesible, ideal si buscas información curada y centralizada para emigrar.</p>
                                    <p className="text-3xl font-bold mb-4">$1</p>
                                    <ul className="text-gray-600 flex-grow">
                                        <li className="mb-2">✓ Acceso de lectura a nuestra comunidad</li>
                                        <li className="mb-2">✓ Acceso a blog con publicaciones de emigrados</li>
                                        <li className="mb-2">✓ Acceso a información básica sobre el proceso emigratorio</li>
                                    </ul>
                                    <Buy setPaid={setPaid} />
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/3">
                                <div className="pricing-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col">
                                    <h2 className="text-2xl font-bold mb-4">Premium</h2>
                                    <p className="text-gray-600 mb-4">Nuestro plan intermedio, ideal para procesos de complejidad intermedia.</p>
                                    <p className="text-3xl font-bold mb-4">$50</p>
                                    <ul className="text-gray-600 flex-grow">
                                        <li className="mb-2">✓ Todas las funcionalidades del plan Basic</li>
                                        <li className="mb-2">✓ Solicitud de NIE y Ciudadanía (si ya contas con la documentación)</li>
                                        <li className="mb-2">✓ Acceso completo a nuestra comunidad</li>
                                    </ul>
                                    <Buy setPaid={setPaid} />
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/3">
                                <div className="pricing-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col">
                                    <h2 className="text-2xl font-bold mb-4">Full</h2>
                                    <p className="text-gray-600 mb-4">Nuestro plan más completo, ideal para todo tipo de necesidades.</p>
                                    <p className="text-3xl font-bold mb-4">$200</p>
                                    <ul className="text-gray-600 flex-grow">
                                        <li className="mb-2">✓ Todas las funcionalidades del plan Premium</li>
                                        <li className="mb-2">✓ Solicitud de NIE y Ciudadanía para casos complejos.</li>
                                        <li className="mb-2">✓ Paso a paso del proceso emigratorio, avanzá por tu cuenta!</li>
                                    </ul>
                                    <Buy setPaid={setPaid} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {route !== "/diagnostico" && (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
                        <a href="/diagnostico">No estás seguro/a de qué plan se adapta mejor a tus necesidades? Realizá el Autodiagnóstico ahora!</a>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Pricing;
