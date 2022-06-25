import { useState } from 'react'
import GifGrid from './components/GifGrid'
import { AddCategory } from './components'


const GifExpert = () => {
    const [categories, setCategories] = useState<Array<string>>([])

    const handleAdd = (newItem: string) => {
        if (categories.includes(newItem.toLowerCase())) return;
        setCategories(catg => [newItem.toLowerCase(), ...catg])
    }

    return (
        <>
            <header className="header-container">
                <h1 aria-label='title' className='title'>Gif Finder</h1>
                <AddCategory onAddCategory={handleAdd} />
            </header>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpert