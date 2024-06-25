import React from 'react';

const NextSteps = ({ steps, toggleStepCompletion }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
            <div className="bg-gray-800 rounded p-4">
                <ul className="space-y-2">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={step.completed}
                                onChange={() => toggleStepCompletion(index)}
                                className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 rounded"
                            />
                            <span className={`text-lg ${step.completed ? 'line-through text-gray-500' : ''}`}>
                                {step.step}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NextSteps;
