import { render, screen } from "@testing-library/react";
import GifItem from "../../components/GifItem";

describe('Test for GifItem component', () => { 

    const testGifData = {
        id: 'asd12d',
        title: 'Saitama',
        url: 'http://one-punch.org/saitama.jpg'
    }

    test('should match snaptshot', () => {
        const { container } = render(<GifItem gif={testGifData} />)
        expect(container).toMatchSnapshot()
    })

    test('should show the image with the src and alt attributes', () => {
        render(<GifItem gif={testGifData} />)
        const {src, alt} = screen.getByRole('img') as HTMLImageElement
        expect(src).toBe(testGifData.url)
        expect(alt).toBe(testGifData.title)
    })
})