import { useState } from 'react';
import Loading from "./Loading";

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        employmentStatus: '',
        migrationReason: [],
        documentation: [],
        additionalInfo: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
                    ? [...prevData[name], value]
                    : prevData[name].filter((item) => item !== value),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API or display a result
        console.log(formData);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setFormSent(true);
        }, 2000);
    };

    return (
        <div className="max-w-xl mx-auto my-8 p-8 bg-[#ecf0f1] shadow-lg rounded-lg">
            {!formSent ? (
                <>
            <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Autodiagnóstico</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="age">Edad</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
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
                        />
                        <label htmlFor="student">Estudiante</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Razones para Emigrar</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="work"
                            name="migrationReason"
                            value="Trabajo"
                            checked={formData.migrationReason.includes('Trabajo')}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="work">Trabajo</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="family"
                            name="migrationReason"
                            value="Familia"
                            checked={formData.migrationReason.includes('Familia')}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="family">Familia</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="lifestyle"
                            name="migrationReason"
                            value="Cambio de Estilo de Vida"
                            checked={formData.migrationReason.includes('Cambio de Estilo de Vida')}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="lifestyle">Cambio de Estilo de Vida</label>
                    </div>
                </div>
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
            ) : <>
                    <h1 className='text-2xl text-black'>Felicidades {formData.name}, podes usar Emigrapp para tu proceso migratorio!</h1>
                    <p>A la brevedad nos pondremos en contacto con vos (a {formData.email}) para contarte como seguir.</p>
            </>}
        </div>
    );
};

export default Form;
