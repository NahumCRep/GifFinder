import { getGifsFromApi } from "../../helpers/getGifsFromApi";

describe('Tests for getGifsFromApi function', () => {
    const category = 'anime'
    const offset = 0

    test('should return an array of objects', async () => {
        const gifs = await getGifsFromApi(category, offset)
        expect(gifs.length).toBeGreaterThan(0)
        
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})