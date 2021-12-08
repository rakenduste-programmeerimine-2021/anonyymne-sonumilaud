import { render, screen } from './test-utils';
import Home from '../pages/Home';

test('Home loads', async () => {
  render(<Home />);
  screen.debug();
});