import React from "react";
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

//Node.js Sass version 7.0.0 is incompatible with ^4.0.0 || ^5.0.0 || ^6.0.0
// Solution
//yarn remove node-sass
//yarn add -D sass
