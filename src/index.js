import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/bleksi-task">
      <Theme
        accentColor="crimson"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
