import { render, screen } from './test-utils';
import PageHeader from '../components/PageHeader';

test('pageheader loads', async () => {
  render(<PageHeader />);
  screen.debug();
});