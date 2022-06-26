
export const getGifsFromApi = async (category: string, offset: number) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RLeRy8lJA9phZpDFvxvfaMbQygp9xZMk&q=${category}&limit=10&offset=${offset}`;
    const resp = await fetch(url);
    const { data } = await resp.json()
    const gifData = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    return gifData
}
