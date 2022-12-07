import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Providers } from 'context/Providers/Providers';

const { worker } = require('./mocks/browser');
worker.start();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Providers>
		<Router>
			<App />
		</Router>
	</Providers>
);
