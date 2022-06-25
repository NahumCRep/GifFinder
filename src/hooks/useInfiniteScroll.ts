import { useEffect, useState } from "react"

export const useInfiniteScroll = () => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false)

    const handleInfiniteScroll = (e: Event) => {
        const {scrollY, innerHeight} = window
        const documentScllH = document.body.scrollHeight
        if((scrollY + innerHeight) === documentScllH){
            setIsScrolling(true) 
        }else{
            setIsScrolling(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleInfiniteScroll)
        
        return () =>  window.removeEventListener('scroll', handleInfiniteScroll)
    },[])

    return {isScrolling, setIsScrolling}
}