import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

afterEach(() => {
    cleanup();
})

describe("App component", () => {
    test("render App", () => {
        render(<Provider store={store}><App /></Provider>);
        const app = screen.getByTestId("app-container");
        expect(app).toBeInTheDocument();
    })
})