import React, { useState } from 'react';

const LowComp = ({ labels, onSave }) => {
    const [editedLabels, setEditedLabels] = useState(labels);

    const handleChange = (index, key, value) => {
        const newLabels = [...editedLabels];
        newLabels[index] = { ...newLabels[index], [key]: value };
        setEditedLabels(newLabels);
    };

    const handleSubmit = () => {
        onSave(editedLabels);
        alert('Changes saved!');
    };

    return (
        <div className="w-full max-w-md">
            {editedLabels.map((label, index) => (
                <div key={index} className="mb-4">
                    <input
                        type="text"
                        value={label.text}
                        onChange={(e) => handleChange(index, 'text', e.target.value)}
                        className="border p-2 w-full mb-2"
                    />
                    <input
                        type="color"
                        value={label.color}
                        onChange={(e) => handleChange(index, 'color', e.target.value)}
                        className="border p-2 w-full mb-2"
                    />
                    <select
                        value={label.style}
                        onChange={(e) => handleChange(index, 'style', e.target.value)}
                        className="border p-2 w-full mb-2"
                    >
                        <option value="font-normal">Normal</option>
                        <option value="font-bold">Bold</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Save
            </button>
        </div>
    );
};

export default LowComp;