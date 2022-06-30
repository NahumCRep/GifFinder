import React, { useState } from "react"
import searchSVG from '../assets/search.svg'

interface Props {
    // setCategoryFn: React.Dispatch<React.SetStateAction<string[]>>
    onAddCategory: (newItem: string) => void
}

const AddCategory = ({ onAddCategory }: Props) => {
    const [searchValue, setSearchValue] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchValue.trim().length <= 1) return;
        onAddCategory(searchValue.trim())
        setSearchValue('')
    }

    return (
            <form onSubmit={handleSubmit} aria-label='form'>
                <input
                    role={'searchbox'}
                    aria-label="search-input"
                    type={'text'}
                    value={searchValue}
                    placeholder='Search Gif'
                    onChange={handleChange}
                />
                <button className="submit-btn" type={'submit'}>
                    <img src={searchSVG} alt="search icon" />
                </button>
            </form>
    )
}

export default AddCategory
