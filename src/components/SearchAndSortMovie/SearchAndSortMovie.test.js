import { render, screen, cleanup } from '@testing-library/react';
import SearchAndSortMovie from './SearchAndSortMovie';
import { Provider } from 'react-redux';
import store from '../../redux/store';

afterEach(() => {
    cleanup();
})

describe("Search and Sort Movie component", () => {
    test("Rendering the component", () => {
        render(<Provider store={store}><SearchAndSortMovie /></Provider>);
        const searchSortComp = screen.getByTestId("search-sort-container");
        expect(searchSortComp).toBeInTheDocument();
    })
})