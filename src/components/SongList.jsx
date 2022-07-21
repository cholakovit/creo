import { useState, useEffect } from 'react'
import { CreoContainer, Holder, CreoList, Song } from '../helper/styles'

import { useSelector } from "react-redux"
import { getSongs, getStatus, getError } from "../store/songsSlice"
import data from '../data/data'

const SongList = () => {
  const error = useSelector(getError)
  const status = useSelector(getStatus)

  let requestedSongs = useSelector(getSongs)

  const init = new Date()
  const [date, setDate] = useState(init)
  const [songs, setSongs] = useState(data)
  const [count, setCount] = useState(import.meta.env.VITE_FOUR)

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerID = setTimeout(() => tick(), 1000)
    const firstElement = songs.shift()

    if(requestedSongs?.resultCount > 0 && count >= 0 && requestedSongs?.results) {

      console.log('requestedSongs.results[count]', requestedSongs.results[count])

      songs.push(requestedSongs.results[count])
      
      console.log('count', count)
      
      
      setCount(count-1)
      return;
    } else {
      songs.push(firstElement)
    }

    return () => {
      clearTimeout(timerID)
    }
  }, [date])

  return (
    <CreoContainer>
      <Holder>
        {status === import.meta.env.VITE_FAILED ? (<>
          {error}
        </>) : status === import.meta.env.VITE_LOADING ? (<>
          loading...
          </>) : (<>
            <CreoList>
              {songs.map((song, index) => (
                <Song key={index}>{song?.collectionName}</Song>
              ))}
            </CreoList>
          </>)
        }
      </Holder>
    </CreoContainer>
  )
}

export default SongList


