import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from '../../hooks/useFetchGifs';
// import { mockFunction } from "../../helpers/mockingFuntionc";

// const useFetchGifsFn = mockFunction(useFetchGifs)

describe('Tests for GifGrid Component', () => {
    test('should show initial state with category title and loading', () => {

        // useFetchGifsFn.mockReturnValue({
        //     gifs: [],
        //     isLoading: true,
        //     getMoreGifs: () => {}
        // })

        const category = 'anime'
        render(<GifGrid category={category} />)
        // screen.debug()
        const loader = screen.getByTestId('loader-spin')
        expect(screen.getByText(category)).toBeInTheDocument()
        expect(loader).toBeInTheDocument()
    })
})