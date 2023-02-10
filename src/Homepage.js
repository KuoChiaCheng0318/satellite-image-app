import React from 'react'
// import Showimage from './Showimage';
import Row from './Row';

// const API_KEY= "eHsJMoLbnJRXRWlQppSOsaFqt2hy0f04BCR2qRr1";

var placelist = [
    { title: 'New York', lon: '-73.93', lat: '40.73' },
    { title: 'Los Angeles', lon: '-118.23', lat: '34.05'  },
    { title: 'Chicago', lon: '-87.69', lat: '41.85'  },
    { title: 'Taipei', lon: '121.50', lat: '25.05'  },

];

function Homepage() {
  return (
    <div className='homepage'>
      {/* <h1>This is my Nasa app home page.</h1> */}
      <div>
        {placelist.map(place =>
            <div>
                {/* <p>{place.title}</p> */}
                <Row title={place.title} lon={place.lon} lat={place.lat} />
                {/* <Showimage fetchUrl={`https://api.nasa.gov/planetary/earth/assets?lon=${place.lon}&lat=${place.lat}&date=2022-01-01&&dim=0.25&api_key=${API_KEY}`} /> */}
            </div>
        )}
      </div>
    </div>
  )
}

export default Homepage