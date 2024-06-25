import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from './Map';

const userStatus = {
    currentStatus: 'Solicitud de visa enviada',
    nextSteps: [
        {
            id: 1,
            step: 'Esperar la aprobación de la visa',
            completed: false,
            icon: '🛫',
            subSteps: [
                { id: 1.1, step: 'Enviar solicitud', completed: true },
                { id: 1.2, step: 'Asistir a la entrevista', completed: false },
                { id: 1.3, step: 'Obtener aprobación', completed: false },
            ],
        },
        {
            id: 2,
            step: 'Prepararse para la mudanza',
            completed: false,
            icon: '📝',
            subSteps: [
                { id: 2.1, step: 'Reservar vuelos', completed: false },
                { id: 2.2, step: 'Encontrar alojamiento', completed: false },
                { id: 2.3, step: 'Empacar pertenencias', completed: false },
            ],
        },
        {
            id: 3,
            step: 'Reunir documentos',
            completed: false,
            icon: '📄',
            subSteps: [
                { id: 3.1, step: 'Obtener copias de documentos importantes', completed: false },
                { id: 3.2, step: 'Traducir documentos', completed: false },
                { id: 3.3, step: 'Notarizar documentos', completed: false },
            ],
        },
        {
            id: 4,
            step: 'Notificar a las autoridades',
            completed: false,
            icon: '🏠',
            subSteps: [
                { id: 4.1, step: 'Notificar al propietario actual', completed: false },
                { id: 4.2, step: 'Notificar al banco', completed: false },
                { id: 4.3, step: 'Notificar a los proveedores de servicios', completed: false },
            ],
        },
    ],
};

const Dashboard = () => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        // Simular una llamada a la API
        setTimeout(() => {
            setStatus(userStatus);
            toast.success('¡Datos del panel de control cargados con éxito!');
        }, 1000);
    }, []);

    const toggleStepCompletion = (stepId, subStepId) => {
        const newStatus = { ...status };
        const step = newStatus.nextSteps.find((s) => s.id === stepId);
        if (subStepId) {
            const subStep = step.subSteps.find((ss) => ss.id === subStepId);
            if (subStep) {
                subStep.completed = !subStep.completed;
                if (subStep.completed) {
                    toast.success(`¡${subStep.step} completado con éxito!`);
                } else {
                    toast.info(`${subStep.step} marcado como incompleto.`);
                }
            }
        } else if (step) {
            step.completed = !step.completed;
            if (step.completed) {
                toast.success(`¡${step.step} completado con éxito!`);
            } else {
                toast.info(`${step.step} marcado como incompleto.`);
            }
        }
        setStatus(newStatus);
    };

    return (
        <div className="flex-grow flex flex-col">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            {status ? (
                <Map steps={status.nextSteps} toggleStepCompletion={toggleStepCompletion} />
            ) : (
                <div className="flex items-center justify-center flex-grow">Cargando...</div>
            )}
        </div>
    );
};

export default Dashboard;
