import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import getNinjas from '../utils/getNinjas';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App getNinjas={getNinjas} />, div);
});