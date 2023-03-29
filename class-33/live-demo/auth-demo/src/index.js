import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModeProvider from './Context/Mode';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';
import AuthProvider from './Context/Auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <ModeProvider>
            <App />
          </ModeProvider>
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
