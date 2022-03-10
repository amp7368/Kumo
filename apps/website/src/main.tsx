import 'reflect-metadata';
import { persistState } from '@datorama/akita';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './app/App';

persistState();
render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
