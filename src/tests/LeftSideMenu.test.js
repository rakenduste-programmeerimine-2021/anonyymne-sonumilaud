import { render, screen } from './test-utils';
import LeftSideMenu from '../components/LeftSideMenu';

test('leftsidemenu loads', async () => {
  render(<LeftSideMenu />);
  screen.debug();
});