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
                </>
            )}
        </>

    )
}
export default Upload;