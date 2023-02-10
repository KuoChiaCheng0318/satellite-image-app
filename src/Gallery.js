import React, { useState, useEffect }  from 'react'
import Row from './Row';
import "./Gallery.css";
import Showimage from './Showimage';

const API_KEY= "eHsJMoLbnJRXRWlQppSOsaFqt2hy0f04BCR2qRr1";

var placelist = [
    { title: 'New York', lon: '-73.93', lat: '40.73' },
    { title: 'Los Angeles', lon: '-118.23', lat: '34.05'  },
    // { title: 'Chicago', lon: '-87.69', lat: '41.85'  },
    { title: 'Taipei', lon: '121.50', lat: '25.05'  },
];

function Gallery() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [date, setDate] = useState('');
    const [APIurl, setAPIurl] = useState('https://api.nasa.gov/planetary/earth/assets?lon=-73.93&lat=40.73&date=2013-05-01&&dim=0.25&api_key=eHsJMoLbnJRXRWlQppSOsaFqt2hy0f04BCR2qRr1');

    const handleClick  = e=> {
        e.preventDefault();
        setAPIurl(
            `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${date}&&dim=0.25&api_key=${API_KEY}`
        );

        // setLatitude("");
        // setLongitude("");
        // setDate("");
    }

    return (
        <div className='gallery'>
            {/* <h1>This is my Nasa app gallery page.</h1> */}
            <h3>Default satellite image: New York City</h3>
            <h4>(Los Angeles: lat=34.05, lon=-118.23; Chicago: lat=41.85, lon=-87.69, Taipei: lat=25.05, lon=121.50)</h4>
            <form>
                <div className='gallery__input'>
                    <div className='gallery__inputtext1'>Latitude (North and South):</div>
                    <input className='gallery__inputtext2' 
                    onChange={e => setLatitude(e.target.value)}
                    value={latitude} 
                    placeholder="40.73" type="text" />

                    <div className='gallery__inputtext1'>, Longitude (East and West):</div>
                    <input className='gallery__inputtext2' 
                    onChange={e => setLongitude(e.target.value)}
                    value={longitude} 
                    placeholder="-73.93" type="text" />

                    <div className='gallery__inputtext1'>, Date (between May 2013 ~ Nov 2021):</div>
                    <input className='gallery__inputtext2' 
                    onChange={e => setDate(e.target.value)}
                    value={date} 
                    placeholder="2013-05-01" type="text" />
                </div>
                <button onClick={handleClick} type="submit" className='gallery__button'>Show the satellite image</button>
            </form>

            <Showimage fetchUrl={APIurl} isLarge />



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

export default Gallery