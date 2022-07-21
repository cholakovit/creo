import { Container } from "@mui/material"
import Search from "../components/Search"
import SongList from "../components/SongList"


const Home = () => {
  return (
    <Container>
      <Search />
      <SongList />
    </Container>
  )
}

export default Home