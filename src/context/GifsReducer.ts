import { GifData } from "../types"

type GifsActions = 
    | {type: 'updateGifsList', payload: GifData[]}
    | {type: 'clearList'}

export const GifsReducer = (state: GifData[], action: GifsActions): GifData[] => {
    switch(action.type){
        case 'updateGifsList':
            return [...state, ...action.payload]
        case 'clearList':
            return []
        default:
            return state
    }
}