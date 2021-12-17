import { render, screen } from './test-utils';
import Login from '../pages/Login';

test('Login loads', async () => {
    render(<Login />);
    screen.getByText(/Login/);
    screen.getByText(/Email/);
    screen.getByText(/Password/);
});