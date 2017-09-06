import react from 'react';
import reactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

reactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
