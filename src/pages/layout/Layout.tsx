import Header from "../../components/header/Header"
import MovieOverview from "../movieOverview/MovieOverview"
import type { IMovie } from "../../interfaces/IMovie"

interface LayoutProps {
  sortingMoviesButtons: (movie: string) => void
  movieList: IMovie[]
}

export default function Layout({ sortingMoviesButtons, movieList }: LayoutProps) {
  return (
    <>
      <Header sortingMoviesButtons={sortingMoviesButtons} />
      <main>
        <MovieOverview movieList={movieList} />
      </main>
    </>
  )
}
