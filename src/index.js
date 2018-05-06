import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
