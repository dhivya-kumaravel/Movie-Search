
import { useEffect, useState } from 'react'
import Poster from './Poster';

const API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr =["Popular","Theatre","Kids","Drama","Comedie"];

const Main = () => {
    const [search,setSearch]=useState();
    const [movieData, setData] = useState([])
    const [url_set, setUrl]=useState(url)
    useEffect(()=>{
        fetch(url_set).then((res)=>res.json()).then((data)=>{
            // console.log(data.results)
            setData(data.results)
        
        })
    },[url_set])

    const getData=(movieType)=>{
        if(movieType=="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);

    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url="https://api.themoviedb.org/3/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=Jack+Reacher"+search;
            setUrl(url);
            setSearch(" ");
        }
    }
  return (
    <div>
      <div className=''>
      <div className='p-4'>
      <nav className='flex items-center border border-blue-600 bg-cyan-300 p-4 flex-wrap flex-row justify-around'>
        <div className='pl-8'><img className='w-16 h-16' src="./pics/food.png" alt="" />
        <h1 className='font-bold italic text-pink-500'>Movie Search</h1></div>
        <div className=''>
          <ul className='flex flex-wrap flex-row gap-4'>
          {
                            arr.map((value,pos)=>{
                                return(
                                    <li><a className='text-blue-600 rounded px-2 border hover:underline font-bold border-pink-500 italic shadow-lg hover:text-green-600' href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                )
                            })
                        }
            
          </ul>
        </div>
        <div className='ml-auto flex items-center flex-wrap'>
          <img className='w-16 h-12 px-2' src="./pics/clapperboard.png" alt="" />
                    <p className='pr-3 text-violet-600 italic font-bold'onChange={(e)=>{setSearch(e.target.value)}} 
                        value={search} onKeyDown={searchMovie}>Search Movie:</p>
          <input className='border border-blue-600' type="text" placeholder='Enter Movie Name....' /></div>

      </nav></div>
      <div className='flex flex-row flex-wrap gap-3 items-center justify-center'>
      {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Poster info={res} key={pos}/>
                        )
                    })
                }</div></div>
      
       
    </div>
  )
}

export default Main