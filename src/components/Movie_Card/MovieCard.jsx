import { useEffect, useState } from 'react'
import axios from '../../constants/axios'
import { imageUrl } from '../../constants/constants'
import { API_KEY } from '../../constants/constants'
import './MovieCard.css'
import { Youtube } from '../Youtube/Youtube'



export const MovieCard = (props) => {

  const [videoId,setVideoId] = useState('')
  const [movies, setMovies] = useState([])
  const [videoPopUp,setVideoPopUp] = useState(false)
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  }, [])

   const handleClick =  (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
          setVideoId(response.data.results[0])
          setVideoPopUp(true)
        })
   }


  return (
    <div className='row'>
      <h2 className=''>{props.title}</h2>
      <div className="posters">
        {movies.map((val) => 
         <div key={val.id} style={{ textAlign:'center'}}>
         <img onClick={() => handleClick(val.id)} className={props.isSmall ? 'sm_poster' : 'poster'} src={`${imageUrl + val.backdrop_path}`} alt="posters" />
         <h4 style={{color:'grey'}}>{val.name || val.title}</h4>
       </div>
        )}
      </div>
      {videoPopUp && <Youtube setVideoPopUp={setVideoPopUp} videoId={videoId}/> }
    </div>
  )
}
