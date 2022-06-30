import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../components";

describe('Tests for AddCategory Component', () => {

    test('should change the input value', () => {
        render(<AddCategory onAddCategory={() => { }} />)
        const input = screen.getByLabelText('search-input') as HTMLInputElement

        fireEvent.input(input, { target: { value: "anime" } })
        // screen.debug()

        expect(input.value).toBe('anime')
    })

    test('should call handleSubmit if input has a value', () => {
        const inputValue = 'anime'
        const onAddCategory = jest.fn()
        render(<AddCategory onAddCategory={ onAddCategory } />)
        const input = screen.getByRole('searchbox') as HTMLInputElement
        const form = screen.getByRole('form') as HTMLFormElement

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)   
        
        expect(input.value).toBe('')

        expect(onAddCategory).toHaveBeenCalled()
        expect(onAddCategory).toHaveBeenCalledTimes(1)
        expect(onAddCategory).toHaveBeenCalledWith(inputValue)
    })

    test('should not call onAddCategory if there is no value', () => {
        // const inputValue = 'a'
        const onAddCategory = jest.fn()
        render(<AddCategory onAddCategory={ onAddCategory } />)

        // const input = screen.getByRole('searchbox') as HTMLInputElement
        const form = screen.getByRole('form') as HTMLFormElement

        // fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)   
        
        // expect(input.value.length).toBeLessThanOrEqual(1)
        expect(onAddCategory).toHaveBeenCalledTimes(0)
        expect(onAddCategory).not.toHaveBeenCalled()
    })
})