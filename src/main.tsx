import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import {GlobalFonts} from './styles/fonts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalFonts/>
        <App/>
    </React.StrictMode>,
);
