import { render, screen, fireEvent } from "@testing-library/react";
import GifExpert from "../GifExpert";
import AddCategory from '../components/AddCategory'

describe('Tests for GifExpert Component', () => {
    test('should match snapshot', () => {
        const {container} = render(<GifExpert />)
        expect(container).toMatchSnapshot()
    })
})