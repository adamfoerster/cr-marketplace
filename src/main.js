import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    environment: {
      api:
        location.hostname === 'hostname'
          ? 'http://localhost:5000/'
          : 'https://cr-marketplace.netlify.com'
    }
  }
});

export default app;
