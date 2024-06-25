import React, { useState } from 'react';

const Map = ({ steps, toggleStepCompletion }) => {
    const [expandedStep, setExpandedStep] = useState(1); // Paso 1 abierto por defecto

    const handleExpand = (stepId) => {
        setExpandedStep(expandedStep === stepId ? null : stepId);
    };

    return (
        <div className="relative w-full h-full flex-grow flex items-center justify-center">
            <svg viewBox="0 0 1000 450" className="w-full h-full">
                {/* Fondo */}
                <rect width="1000" height="450" fill="#1a1a1a" />
                <path d="M100 200 L900 200" stroke="white" strokeWidth="2" />
                {/* Iconos y pasos */}
                {steps.map((step, index) => (
                    <g key={step.id} transform={`translate(${150 + index * 200}, 200)`}>
                        <circle
                            cx="0"
                            cy="0"
                            r="40"
                            fill={step.completed ? '#2ecc71' : '#e74c3c'}
                            stroke="white"
                            strokeWidth="3"
                            onClick={() => handleExpand(step.id)}
                            className="cursor-pointer"
                        />
                        <text
                            x="0"
                            y="0"
                            textAnchor="middle"
                            fill="white"
                            fontSize="24"
                            fontWeight="bold"
                            dy=".3em"
                            className="cursor-pointer"
                            onClick={() => handleExpand(step.id)}
                        >
                            {step.icon}
                        </text>
                        <text
                            x="0"
                            y="60"
                            textAnchor="middle"
                            fill="white"
                            className="text-xs"
                            fontFamily="sans-serif"
                        >
                            {step.step}
                        </text>
                        {expandedStep === step.id && (
                            <g transform="translate(0, 80)">
                                {step.subSteps.map((subStep, subIndex) => (
                                    <g
                                        key={subStep.id}
                                        transform={`translate(0, ${subIndex * 40})`}
                                        onClick={() => toggleStepCompletion(step.id, subStep.id)}
                                        className="cursor-pointer"
                                    >
                                        <circle
                                            cx="0"
                                            cy="0"
                                            r="15"
                                            fill={subStep.completed ? '#2ecc71' : '#e74c3c'}
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                        <text
                                            x="20"
                                            y="0"
                                            textAnchor="start"
                                            fill="white"
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
                ))}
            </svg>
        </div>
    );
};

export default Map;
