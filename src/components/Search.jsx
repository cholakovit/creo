import { useState } from 'react'
import { CreoContainer, Holder, SearchField } from '../helper/styles'

import { requestSongs } from '../store/songsSlice'
import { useDispatch } from "react-redux"

const Search = () => {
  const dispatch = useDispatch()
  const [searchSongs, setSearchSongs] = useState()
  
  const handleSearch = (value) => {
    dispatch(requestSongs({ requestSong: value }))
  }

  return (
    <CreoContainer>
        <Holder>
            <SearchField id="filled-basic" label="Filled" variant="filled" onKeyUp={ (e) => { handleSearch(e.target.value) } } />
        </Holder>
    </CreoContainer>
  )
}

export default Search