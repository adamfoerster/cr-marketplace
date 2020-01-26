import { render } from '@testing-library/svelte';
import App from './App.svelte';
global.fetch = require('node-fetch');

describe('App component', () => {
  test('should render component correctly', () => {
    const { container } = render(App, {
      props: {
        environment: {
          api: 'http://localhost:5000/'
        }
      }
    });

    expect(container).toBeInTheDocument('<main>');
  });
});
