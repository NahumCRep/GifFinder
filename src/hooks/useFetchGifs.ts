import { useState, useEffect } from "react"
import { getGifsFromApi } from "../helpers/getGifsFromApi"
import { GifData } from "../types"

export const useFetchGifs = (initalValue: string) => {
    const [gifs, setGifs] = useState<Array<GifData>>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const getGifs = async (categ: string, offset: number, preserveData: GifData[] = []) => {
            setIsLoading(true)
            const allGifs = await getGifsFromApi(categ, offset)
            preserveData.length > 0 
                ? setGifs([...preserveData, ...allGifs])  
                : setGifs(allGifs)
            setIsLoading(false)
    }

    useEffect(()=>{
        getGifs(initalValue,0)
    },[initalValue])

    return {
        gifs,
        isLoading,
        getGifs
    }
}

