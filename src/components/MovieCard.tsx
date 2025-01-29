import "./MovieCard.css"

// Interface
interface MovieProps {
  title: string;
  director: string;
  year: number;
  isWatched: boolean;
}

//Returna filmkort
const MovieCard = ({ title, director, year, isWatched }: MovieProps) => {
  return (
    //Sätt klassnamn beronde på om sant eller falskt
    <section className={`movie-card ${isWatched ? 'watched' : 'not-watched'}`}>
      <h2>{title}</h2>
      <p><strong>År: {year}</strong></p>
      <p>Regissör: {director}</p>
      {/*Skriv ut ja eller nej beroende på om sant eller falskt*/}
      <p>Sett filmen?: {isWatched ? "Ja" : "Nej" }</p>
    </section>
  )
}

export default MovieCard
