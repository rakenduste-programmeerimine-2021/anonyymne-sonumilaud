import { render, screen } from './test-utils';
import App from '../App';

test('main page or main page loading screen loads', async () => {
  render(<App />);
});