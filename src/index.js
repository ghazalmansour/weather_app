import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Hou comment: if you delete serviceWorker.js from your src folder, you'd have to remove the line below as well that's referencing the file. Otherwise, your app will not compile.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Hou comment: remove the line below after removing serviceWorker.js
serviceWorker.unregister();
