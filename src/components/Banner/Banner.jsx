
import { useEffect , useState } from 'react'
import axios from '../../constants/axios'
import { API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import './Banner.css'



export const Banner = () => {

  const randomNumber = Math.floor(Math.random() * 19) + 1;
  const [movie,setMovie] = useState()
  useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[randomNumber])
        })
  },[])



  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})` }}>
        <div className='content'>
               <h1 className='title'>{movie ? movie.name : ''}</h1>
               <div className='banner_btn'>
                      <button className='btn'>Play</button>
                      <button className='btn'>My List</button>
               </div>
               <h1 className='desc'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade">
            
        </div>
    </div>
  )
}
