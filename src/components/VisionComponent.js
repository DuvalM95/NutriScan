import React from 'react';

const VisionComponent = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">NutriScan - Visión Computacional</h1>
            <p className="mb-4">
                ¡Bienvenido a NutriScan! Este componente utiliza tecnología de visión computacional para analizar y proporcionar información nutricional a partir de imágenes.
            </p>
            <div className="flex flex-col items-center">
                <input type="file" accept="image/*" className="mb-4" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Analizar Imagen
                </button>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Resultados:</h2>
                <p className="text-gray-700">La información nutricional se mostrará aquí después del análisis.</p>
            </div>
        </div>
    );
};

export default VisionComponent;