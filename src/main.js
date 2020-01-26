import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		environment: {
			api: 'http://localhost:5000/'
		},
	}
});

export default app;