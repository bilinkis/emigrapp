import Loading from "./Loading";
import ProgressBar from "./ProgressBar";
const Upload = ({ progress, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <>
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-center mt-12">Enviando tus archivos al Consulado</h2>
                        <Loading />
                        <ProgressBar progress={progress} />
                    </>
                </>) : (
                <>
                    <h2 className="text-2xl font-bold mb-6 text-center">Archivos enviados con éxito!</h2>
                    <p className='text-xl black text-center'>Recibirás un email con los próximos pasos a seguir.</p>
                    <a href="/dashboard" className="text-center mx-auto block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded mt-8">Acceder al dashboard</a>
                </>
            )}
        </>

    )
}
export default Upload;