import React from 'react';

const Modal = ({ show, onClose, subStep, onVerifyCompletion }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded w-1/2">
                <h2 className="text-lg font-bold mb-4">{subStep.step}</h2>
                <ol className="list-decimal list-inside mb-4">
                    {subStep.instructions.map((instruction, index) => (
                        <li key={index} className="mb-2">{instruction}</li>
                    ))}
                </ol>
                <button
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded mr-4"
                    onClick={() => onVerifyCompletion(subStep.id)}
                >
                    Marcar como completado
                </button>
                <button
                    className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
