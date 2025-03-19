import React, { useState, useEffect } from 'react';

const ImageDebugger = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [testResults, setTestResults] = useState<{[key: string]: boolean}>({});
  
  // Caminhos para testar
  const pathsToTest = [
    '/src/assets/1.png',
    'src/assets/1.png',
    './assets/1.png',
    '../assets/1.png',
    '/assets/1.png',
    'assets/1.png',
    '1.png'
  ];
  
  useEffect(() => {
    // Testa vários caminhos para ver qual funciona
    const testImage = (path: string) => {
      return new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path;
      });
    };
    
    const runTests = async () => {
      const results: {[key: string]: boolean} = {};
      
      for (const path of pathsToTest) {
        results[path] = await testImage(path);
      }
      
      setTestResults(results);
      
      // Coleta os caminhos que funcionaram
      const workingPaths = Object.entries(results)
        .filter(([_, works]) => works)
        .map(([path]) => path);
      
      setImagePaths(workingPaths);
    };
    
    runTests();
  }, []);
  
  if (imagePaths.length === 0) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        <h3 className="font-bold">Problemas com Imagens</h3>
        <p>Não foi possível carregar as imagens. Caminhos testados:</p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          {Object.entries(testResults).map(([path, works]) => (
            <li key={path} className={works ? "text-green-600" : "text-red-600"}>
              {path}: {works ? "✅ Funciona" : "❌ Falhou"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
      <h3 className="font-bold">Imagens Carregadas com Sucesso</h3>
      <p>Caminhos que funcionam:</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        {imagePaths.map(path => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDebugger; 