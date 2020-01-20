import App from './App.svelte';

document.querySelector('h1').remove();

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;