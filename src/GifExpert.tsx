import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


const GifExpert = () => {
    const [category, setCategory] = useState<string>('')

    const handleAdd = (newItem: string) => {
        setCategory(newItem)
    }

    return (
        <>
            <header className="header-container">
                <h1 aria-label='title' className='title'>Gif Finder</h1>
                <AddCategory onAddCategory={handleAdd} />
            </header>
            <GifGrid category={category} />
        </>
    )
}

export default GifExpert