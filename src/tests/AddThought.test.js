import { render, screen } from './test-utils';
import AddThought from '../pages/AddThought';

test('AddThought loads', async () => {
    render(<AddThought />);
    screen.debug();
    screen.getByText(/Add Thought/);
    screen.getByText(/UserName/);
    screen.getByText(/Topic/);
});