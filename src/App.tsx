//Imports
import Header from "./components/Header"
import Footer from "./components/Footer"
import MovieCard from "./components/MovieCard"

const App = () => {
  //Array med moviecard-objekt
  const movieCards = [
    {
      title: "There will be blood",
      director: "Paul Thomas Anderson",
      year: 2007,
      isWatched: true
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      isWatched: true
    },
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      year: 2019,
      isWatched: true
    },
    {
      title: "The Grand Budapest Hotel",
      director: "Wes Anderson",
      year: 2014,
      isWatched: false
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      isWatched: true
    },
    {
      title: "La La Land",
      director: "Damien Chazelle",
      year: 2016,
      isWatched: false
    }
];


  return (
    <>
      {/*Header*/}
      <Header />
      <main>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {
            //Loopa igenom array och rendera MovieCard-komponent
            movieCards.map((movie) => (
              //Skapa en MovieCard-komponent och skicka med alla props
              <MovieCard title={movie.title} director={movie.director} year={movie.year} isWatched={movie.isWatched} />
            ))
          }
        </div>
      </main>
      {/*Footer*/}
      <Footer />
    </>
  )
}

export default App
