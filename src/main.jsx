import React from 'react';
import ReactDOM from 'react-dom/client';

// import  {FirstApp} from './First'

import { CounterApp } from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={20} />
    </React.StrictMode> 
)
