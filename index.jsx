import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}

console.log('Mounting React App...');
try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    console.log('App mounted successfully');
} catch (error) {
    console.error('Error mounting React App:', error);
}
