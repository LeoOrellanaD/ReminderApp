import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }

  const clearInput = () => {
    setSearchText('')
  }

  return (
    <div className="bg-background-color w-2/4 relative">
      <input
        type="search"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
        className="p-2 w-full font-myriad bg-search-color rounded-lg outline-none pr-8"
      />
      {searchText && ( //Show icon only if there any text
        <IoClose
          className="absolute inset-y-3 right-0 mr-2 h-4 w-4 text-gray-500"
          onClick={clearInput}
        />
      )}
    </div>
  )
}

export default SearchBar
