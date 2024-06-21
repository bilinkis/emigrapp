const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full">
            <div
                className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                style={{ width: `${progress}%` }}
            >
                {progress}%
            </div>
        </div>
    );
};
export default ProgressBar;
