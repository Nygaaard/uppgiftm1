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
    <section>
      <h2>{title}</h2>
      <p><strong>År: {year}</strong></p>
      <p>Regissör: {director}</p>
      {/*Skriv ut ja eller nej beroende på sant eller falskt*/}
      <p>{isWatched ? "Yes" : "No" }</p>
    </section>
  )
}

export default MovieCard
