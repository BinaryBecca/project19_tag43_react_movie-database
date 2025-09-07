interface HeaderProps {
  sortingMoviesButtons: (movie: string) => void
}

export default function Header({ sortingMoviesButtons }: HeaderProps) {
  return (
    <>
      <div className="flex flex-row justify-evenly mt-5">
        <button className="border p-3 cursor-pointer" onClick={() => sortingMoviesButtons("dateUp")}>
          Sort by Date Ascending
        </button>
        <button className="border p-3 cursor-pointer" onClick={() => sortingMoviesButtons("dateDown")}>
          Sort by Date Descending
        </button>
        <button className="border p-3 cursor-pointer" onClick={() => sortingMoviesButtons("bestRate")}>
          Best Rate
        </button>
        <button className="border p-3 cursor-pointer" onClick={() => sortingMoviesButtons("a-z")}>
          A-Z
        </button>
        <button className="border p-3 cursor-pointer" onClick={() => sortingMoviesButtons("z-a")}>
          Z-A
        </button>
      </div>
    </>
  )
}
