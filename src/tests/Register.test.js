import { render, screen } from './test-utils';
import Register from '../pages/Register';

test('Register loads', async () => {
    render(<Register />);
    screen.getByText(/Username/);
    screen.getByText(/Email/);
    screen.getByText(/Password/);
    screen.getByText(/Confirm password/);
});