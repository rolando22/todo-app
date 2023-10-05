import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { UserProvider } from './context/user.tsx';
import './index.css';
import { TodosProvider } from './context/todos.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserProvider>
			<TodosProvider>
				<App />
			</TodosProvider>
		</UserProvider>
	</React.StrictMode>,
);
