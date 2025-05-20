import React from 'react';

const VisionComponent = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">NutriScan - Computer Vision</h1>
            <p className="mb-4">
                Welcome to NutriScan! This component utilizes computer vision technology to analyze and provide insights on nutritional information from images.
            </p>
            <div className="flex flex-col items-center">
                <input type="file" accept="image/*" className="mb-4" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Analyze Image
                </button>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Results:</h2>
                <p className="text-gray-700">Nutritional information will be displayed here after analysis.</p>
            </div>
        </div>
    );
};

export default VisionComponent;