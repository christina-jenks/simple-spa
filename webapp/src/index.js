import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import getNinjas from './utils/getNinjas'

ReactDOM.render(
    <React.StrictMode><App getNinjas={getNinjas} /></React.StrictMode>,
    document.getElementById('profile-app')
)