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
    const {gifs, isLoading, getGifs} = useFetchGifs(category)
    const {isScrolling, setIsScrolling} = useInfiniteScroll()

    const handleInfiniteScroll = () => {
        console.log('handle scroll',gifs)
    }

    useEffect(()=>{
        handleInfiniteScroll()
        console.log(gifs)
        if(isScrolling && !isLoading){
            console.log('loading more...')
            const newOffset = offsetValue + 11
            setOffsetValue(newOffset)
            getGifs(category, newOffset, gifs)
            setIsScrolling(false)
        }
    },[isScrolling, isLoading])

    return (
        <>
            <h2>{category}</h2>
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
        </>
    )
}

export default GifGrid