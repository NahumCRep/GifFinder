import { useState, useEffect } from 'react'
import GifItem from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import Loader from './Loader'

interface Props {
    category: string
}

const GifGrid = ({ category }: Props) => {
    const [offsetValue, setOffsetValue] = useState<number>(0)
    const { gifs, isLoading, getGifs } = useFetchGifs(category)
    const { isScrolling, setIsScrolling } = useInfiniteScroll()

    const loadMoreGifs = () => {
        const newOffset = offsetValue + 11
        setOffsetValue(newOffset)
        getGifs(category, newOffset, gifs)
        setIsScrolling(false)
    }

    useEffect(() => {
        if (isScrolling && !isLoading) loadMoreGifs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isScrolling, isLoading])

    return (
        <main>
            <h2 className='gifgrid-title'>{category}</h2>
            <div className='card-grid'>
                {
                    gifs.map(gif => (
                        <GifItem key={gif.id} gif={gif} />
                    ))
                }
            </div>
            {
                isLoading && (<Loader />)
            }
        </main>
    )
}

export default GifGrid