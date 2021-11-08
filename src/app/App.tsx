import React from 'react';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const App: React.FC = () => (
    <CustomProvider theme="dark">
        <header className="App-header">
            <p>Editand save to reload. </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </header>
    </CustomProvider>
);

export default App;
