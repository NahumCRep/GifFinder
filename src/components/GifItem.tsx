import { GifData } from '../types'

interface Props {
    gif: GifData
}

const GifItem = ({gif}: Props) => {
    return (
        <div className='card'>
            <img src={gif.url} alt={gif.title} />
            {/* <p>{gif.title}</p> */}
        </div>
    )
}

export default GifItem