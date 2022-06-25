import { createContext } from 'react';
import { GifData } from '../types';

export type GifsContextProps = {
    gifsState: GifData[],
    updateGifs: (gifsList: GifData[]) => void,
    clearGifs: () => void
}

export const GifsContext = createContext<GifsContextProps>({} as GifsContextProps)
