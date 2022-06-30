import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Tests for useFetchGifs customHook', () => {
    test('should first return initial state', () => { 
        const {result} = renderHook(() => useFetchGifs('anime')) 
        const {gifs, isLoading, getMoreGifs} = result.current
        expect(gifs.length).toBe(0)
        expect(isLoading).toBeTruthy()      
    })

    test('should return an array of gifs and isLoading on false', async () => { 
        const {result} = renderHook(() => useFetchGifs('anime')) 
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )

        const {gifs, isLoading, getMoreGifs} = result.current
        expect(gifs.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy() 
    })
})