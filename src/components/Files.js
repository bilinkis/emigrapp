const Files = ({ formData, handleFileChange, setUploaded, setIsLoading }) => {
    return (
        <>

            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Muchas gracias por tu compra!</h1>
                <h2 className="text-2xl font-bold mb-6 text-center">Subir documentación</h2>
                <form>
                    {formData.documentation.includes('Pasaporte Europeo') && (
                        <>
                            <label htmlFor="passport" className="btn">Pasaporte Europeo</label>
                            <input
                                type="file"
                                id="passport"
                                name="passport"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border rounded"
                                multiple
                                accept='application/pdf, image/*'
                                required
                            />
                        </>
                    )}
                    {formData.documentation.includes('NIE') && (
                        <>
                            <label htmlFor="nie" className="btn">Certificado de NIE</label>
                            <input
                                type="file"
                                id="nie"
                                name="nie"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border rounded"
                                multiple
                                accept='application/pdf, image/*'
                                required
                            />
                        </>
                    )}
                    {formData.documentation.includes('Permiso de Trabajo') && (
                        <>
                            <label htmlFor="trabajo" className="btn">Permiso de trabajo</label>
                            <input
                                type="file"
                                id="trabajo"
                                name="trabajo"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border rounded"
                                multiple
                                accept='application/pdf, image/*'
                                required
                            />
                        </>
                    )}
                    {formData.family === 'true' && (
                        <>
                            <label htmlFor="familiar" className="btn">Documento que acredite el parentesco</label>
                            <input
                                type="file"
                                id="familiar"
                                name="familiar"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border rounded"
                                multiple
                                accept='application/pdf, image/*'
                                required
                            />
                        </>
                    )}
                    <button className="mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => { setUploaded(true); setIsLoading(true); }}>Subir mis documentos</button>
                </form>
            </div>

        </>
    )
}
export default Files;