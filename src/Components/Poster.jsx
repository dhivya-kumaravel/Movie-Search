

const Poster = (movie) => {
    // console.log(movie.info)
//   const {title, poster_path, vote_average, overview} = movie
let img_path="https://image.tmdb.org/t/p/w500";
  return (
  <div className='flex items-center justify-center flex-wrap flex-row grid'>
    <div className='card flex flex-wrap container bg-yellow-200 w-40 items-center justify-center shadow-xl'>
        <img className='w-40 h-48' src={img_path+movie.info.poster_path} alt="" />
        <div className='movie-details flex flex-col items-center justify-center'>
            <div className='box'>
                <h4 className='font-bold font-serif'>{movie.info.title}</h4>
                <p className='ratings flex items-center justify-center font-bold'>{movie.info.vote_average}</p></div>
                </div>

        </div></div>
  )
}

export default Poster