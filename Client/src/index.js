//The wok of index.js is to laod the app component inside the div which has id of root
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
    