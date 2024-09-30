// src/App.tsx

import React from 'react';
import { Car } from './Vehicle';

const App: React.FC = () => {
    const myCar = new Car("Benz", "Bentley", 2021);
    
    // Call the start method to verify it works
    myCar.start();

    return (
        <div>
            <h1>My Car</h1>
            <p>Make: {myCar.make}</p>
            <p>Model: {myCar.model}</p>
            <p>Year: {myCar.year}</p>
        </div>
    );
};

export default App;
