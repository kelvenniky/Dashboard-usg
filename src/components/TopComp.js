import React from 'react';

const TopComp = ({ labels }) => {
    return (
        <div className="w-full max-w-md mb-8">
            {labels.map((label, index) => (
                <div
                    key={index}
                    className={`p-2 mb-2 text-center ${label.style}`}
                    style={{ color: label.color }}
                >
                    {label.text}
                </div>
            ))}
        </div>
    );
};

export default TopComp;