import { useReducer } from "react";
import { GifsContext } from "./GifsContext";
import {GifsReducer} from './GifsReducer'
import {GifData} from '../types' 

interface Props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: GifData[] = []

export const GifsProvider = ({children}: Props) => {
    const [ gifState, dispatch] = useReducer(GifsReducer, INITIAL_STATE)

    const updateGifList = (newData: GifData[]) => {
        dispatch({type:'updateGifsList', payload: newData})
    }

    const clearGifList = () => {
        dispatch({type:'clearList'})
    }

    return(
        <GifsContext.Provider value={{
            gifsState: gifState,
            updateGifs: updateGifList,
            clearGifs: clearGifList
        }}>
            {children}
        </GifsContext.Provider>
    )
}