import React from 'react'
import { BsShare } from 'react-icons/bs'
import './MoviePage.css'


const MoviePage = () => {

  const movie={
    wideposter:"",
    potraitposter:"",
    title:"",
    rating:8.5,
    halls:[
      "2D",
      "3D"
    ],
    languages:[
      "Telgu",
      "Hindi",
      "English",
    ],duration:"2h 15m",
    type:"Action/Thriller",
    realeasedate:"sep 3,2023",
    cast:[
      {
        _id:"1",
        name:"",
        role:"Actor",
        imageUrl:"",
      },
      {
        _id:"1",
        name:"",
        role:"Actor",
        imageUrl:"",
      }
    ]
    
  }
  return (
    <div className='moviepage'>
        <div className='c1' style={
            {
                backgroundImage:`url(${movie.wideposter})`
            }
        }>
          <div className='c11'>
            <div className='left'>
            <div className='movie_poster'
                                    style={{
                                        backgroundImage: `url(${movie.potraitposter})`
                                    }}
                                >
                                    <p>In cinemas</p>
                                </div>

            </div>
            <div className='right'>
            <button className='sharebtn'><BsShare className='shareicon' />Share</button>
            </div>


          </div>
        </div>
        <div className='c2'>

        </div>
    </div>
  )
}

export default MoviePage