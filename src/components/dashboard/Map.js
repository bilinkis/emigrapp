import React, { useState } from 'react';

const Map = ({ steps, toggleStepCompletion, onSubStepClick }) => {
    const [expandedStep, setExpandedStep] = useState(1); // Paso 1 abierto por defecto

    const handleExpand = (stepId) => {
        setExpandedStep(expandedStep === stepId ? null : stepId);
    };

    const totalWidth = 200 * (steps.length - 1) + 300; // Calcular el ancho total del mapa

    const getStepCompletionPercentage = (subSteps) => {
        const completedSubSteps = subSteps.filter(subStep => subStep.completed).length;
        return (completedSubSteps / subSteps.length) * 100;
    };

    return (
        <div className="relative w-full h-full flex-grow flex items-center justify-center">
            <svg viewBox={`0 0 ${totalWidth} 410`} className="w-full h-full">
                {/* Fondo */}
                <rect width={totalWidth} height="410" fill="#bdc3c7" />

                {/* Línea que conecta los pasos */}
                <path d={`M150 100 L${totalWidth - 150} 100`} stroke="#2d3436" strokeWidth="4" fill="transparent" strokeDasharray="10 10" />

                {/* Iconos y pasos */}
                {steps.map((step, index) => {
                    const percentage = getStepCompletionPercentage(step.subSteps);
                    const strokeDasharray = 2 * Math.PI * 40; // Circunferencia del círculo
                    const strokeDashoffset = strokeDasharray - (strokeDasharray * (percentage / 100));
                    return (
                        <g key={step.id} transform={`translate(${150 + index * 200}, 100)`}>
                            <circle
                                cx="0"
                                cy="0"
                                r="40"
                                fill="#ffffff"
                                stroke={step.completed ? '#2ecc71' : '#e74c3c'}
                                strokeWidth="3"
                                onClick={() => handleExpand(step.id)}
                                className="cursor-pointer"
                            />
                            <circle
                                cx="0"
                                cy="0"
                                r="40"
                                fill="none"
                                stroke="#2ecc71"
                                strokeWidth="3"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                transform="rotate(-90) translate(0, 0)"
                                className="cursor-pointer"
                            />
                            <foreignObject x="-20" y="-20" width="40" height="40" onClick={() => handleExpand(step.id)}>
                                <div className="flex items-center justify-center w-full h-full cursor-pointer">
                                    <i className={`fas ${step.icon} text-[#2d3436] text-2xl`}></i>
                                </div>
                            </foreignObject>
                            <text
                                x="0"
                                y="60"
                                textAnchor="middle"
                                fill="black"
                                className="text-xs"
                                fontFamily="sans-serif"
                            >
                                {step.step}
                            </text>
                            {expandedStep === step.id && (
                                <g transform="translate(-60, 100)">
                                    {step.subSteps.map((subStep, subIndex) => (
                                        <g
                                            key={subStep.id}
                                            transform={`translate(0, ${subIndex * 50})`}
                                            onClick={() => onSubStepClick({ ...subStep, parentId: step.id })}
                                            className="cursor-pointer align-left"
                                        >
                                            <circle
                                                cx="0"
                                                cy="0"
                                                r="10"
                                                fill={subStep.completed ? '#2ecc71' : '#e74c3c'}
                                                stroke="#2d3436"
                                                strokeWidth="2"
                                            />
                                            <text
                                                x="20"
                                                y="0"
                                                textAnchor="start"
                                                fill="black"
                                                className="text-xs"
                                                fontFamily="sans-serif"
                                                dy=".3em"
                                            >
                                                {subStep.step}
                                            </text>
                                        </g>
                                    ))}
                                </g>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default Map;
