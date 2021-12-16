import { render, screen } from './test-utils';
import ThoughtList from '../components/ThoughtList';

test('thought list loads', async () => {
  render(<ThoughtList />);
  screen.debug();
});