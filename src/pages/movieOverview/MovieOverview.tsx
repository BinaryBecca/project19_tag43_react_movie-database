// import moviesData from "../../data.ts"
import type { IMovie } from "../../interfaces/IMovie"

interface MovieOverviewProps {
  movieList: IMovie[]
}

export default function MovieOverview({ movieList }: MovieOverviewProps) {
  return (
    <>
      <ul className="p-[2rem] flex flex-row flex-wrap justify-center items-center gap-[1rem] mt-[2rem]">
        {movieList.map((movieEntry) => (
          <li
            key={movieEntry.title}
            className="flex flex-col justify-evenly items-center mb-[1rem] border p-[1rem] w-[15rem] h-[20rem]">
            <p>{movieEntry.title}</p>
            <p>{movieEntry.year}</p>
            <p>{movieEntry.director}</p>
            <p>{movieEntry.duration}</p>
            <p className="mb-[1rem]">{movieEntry.rate}</p>

            {movieEntry.genre.map((movieGenre) => (
              <p key={movieGenre} className="text-xs leading-0.5">
                {movieGenre}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </>
  )
}
