import { useState, useEffect } from 'react';
import Loading from "./Loading";
import ProgressBar from './ProgressBar';
import Pricing from './Pricing';
import { useRouter } from 'next/router';
import Files from './Files';
import Upload from './Upload';

const Form = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        employmentStatus: '',
        documentation: [],
        additionalInfo: '',
        documents: {},
        family: ''
    });
    const [paid, setPaid] = useState(false);
    const [uploaded, setUploaded] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
                    ? [...prevData[name], value]
                    : prevData[name].filter((item) => item !== value),
            }));
        } else if (type === 'radio') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const fileNames = Array.from(files).map((file) => file.name);
        setFormData((prevData) => ({
            ...prevData,
            documents: {
                ...prevData.documents,
                [name]: fileNames,
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsLoading(true);
        setFormSent(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsLoading(false);
                    return 100;
                }
                const random = Math.floor(Math.random() * 5);
                if (prev + random > 100) {
                    return 100;
                } else {
                    return prev + random;
                }
            });
        }, 300);
    };

    return (
        <div className="max-w-[1000px] mx-auto my-8 p-8 bg-[#ecf0f1] shadow-lg rounded-lg">
            {!formSent ? (
                <>
                    <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Autodiagnóstico</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                placeholder='Nombre'
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                placeholder='Edad'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Estatus de Empleo</label>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="employed"
                                    name="employmentStatus"
                                    value="Employed"
                                    checked={formData.employmentStatus === 'Employed'}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="employed">Empleado</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="unemployed"
                                    name="employmentStatus"
                                    value="Unemployed"
                                    checked={formData.employmentStatus === 'Unemployed'}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="unemployed">Desempleado</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="student"
                                    name="employmentStatus"
                                    value="Student"
                                    checked={formData.employmentStatus === 'Student'}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="student">Estudiante</label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Tienes algún familiar directo (padres, abuelos, bisabuelos) que hayan nacido en España o tengan nacionalidad Española?</label>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="yes"
                                    name="family"
                                    value="true"
                                    checked={formData.family === 'true'}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="yes">Sí</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="no"
                                    name="family"
                                    value="false"
                                    checked={formData.family === 'false'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                        {formData.family === 'true' && (
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Documentación con la que ya cuentas</label>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        id="passport"
                                        name="documentation"
                                        value="Pasaporte Europeo"
                                        checked={formData.documentation.includes('Pasaporte Europeo')}
                                        onChange={handleChange}
                                        className="mr-2"

                                    />
                                    <label htmlFor="passport">Pasaporte Europeo</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        id="NIE"
                                        name="documentation"
                                        value="NIE"
                                        checked={formData.documentation.includes('NIE')}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="NIE">Número de Identificación Extranjero</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        id="workPermit"
                                        name="documentation"
                                        value="Permiso de Trabajo"
                                        checked={formData.documentation.includes('Permiso de Trabajo')}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="workPermit">Permiso de Trabajo</label>
                                </div>
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="additionalInfo">Información Adicional</label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                rows="4"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                {isLoading ? <Loading /> : "Enviar"}
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8" onClick={() => { setFormSent(false); setIsLoading(false); setPaid(false); setUploaded(false); setProgress(0) }}>Volver al formulario</button>
                    {(formData.documentation.length === 0 && formData.family === 'true' && !paid) ? (
                        <>
                            <h2 className='text-2xl font-bold mb-6 text-center mt-12'>Tu caso es complejo, te recomendamos contratar nuestro plan Full.</h2>
                            <Pricing route={router.pathname} suggested="full" setPaid={setPaid} />
                        </>
                    ) : formData.documentation.length > 0 && !paid ? (
                        <>
                            <h2 className='text-2xl font-bold mb-6 text-center mt-12'>Tu caso tiene una complejidad intermedia, te recomendamos contratar nuestro plan Premium.</h2>
                            <Pricing route={router.pathname} suggested="premium" setPaid={setPaid} />
                        </>
                    ) : !uploaded && paid && (formData.family === "true" || (formData.documentation.includes('Pasaporte Europeo') || formData.documentation.includes('NIE') || formData.documentation.includes('Permiso de Trabajo'))) ? (
                        <>
                            <Files formData={formData} handleFileChange={handleFileChange} setUploaded={setUploaded} setIsLoading={setIsLoading} />
                        </>
                    ) : uploaded && paid ? (
                        <>
                            <Upload progress={progress} isLoading={isLoading} />
                        </>
                    ) : (formData.family === "false") ? (
                        <>
                            <h2 className="text-2xl font-bold mb-6 text-center mt-12">Por el momento no podremos ayudarte, te enviaremos novedades a tu email cuando puedas usar Emigrapp. Gracias!</h2>

                        </>
                    ) : null}
                </>
            )}
        </div>
    );
};

export default Form;
