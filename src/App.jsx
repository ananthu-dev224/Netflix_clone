import { Navbar } from "./components/Navbar/Navbar"
import { Banner } from "./components/Banner/Banner"
import { MovieCard } from "./components/Movie_Card/MovieCard"
import { comedy , originals , action , horror , romance } from "./urls/urls"


function App() {


  return (
    <>
      <Navbar />
       <Banner />
       <MovieCard  title={"Netflix Originals"} url={originals}  />
       <MovieCard  title={"Action"} url={action} isSmall />
       <MovieCard  title={"Comedy"} url={comedy}  />
       <MovieCard  title={"Horror"} url={horror} isSmall />
       <MovieCard  title={"Romace"} url={romance}  />
    </>
  )
}

export default App
