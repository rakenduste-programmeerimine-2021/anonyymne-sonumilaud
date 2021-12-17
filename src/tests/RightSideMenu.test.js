import { render, screen } from './test-utils';
import RightSideMenu from '../components/RightSideMenu';

test('rightsidemenu loads', async () => {
  render(<RightSideMenu />);
  screen.getByText(/Home/);
  screen.getByText(/Login/);
  screen.getByText(/Register/);
});