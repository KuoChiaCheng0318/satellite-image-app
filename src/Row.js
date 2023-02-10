import React from 'react'
import Showimage from './Showimage';
import "./Row.css"

const API_KEY= "eHsJMoLbnJRXRWlQppSOsaFqt2hy0f04BCR2qRr1";

// var timelist = [
//     // { timestamp: '2021-12-01'},
//     // { timestamp: '2013-05-01'},
//     '2021-12-01',
//     '2013-5-01',
// ];

function Row({title, lon, lat}) {

    // get a list of dates in timelist
    var timelist = [];
    // year loop
    for (var i = 2014; i<= 2015 ; i++){
        // month loop
        for (var j = 1; j<= 2 ; j++){ 
            timelist.push(i.toString()+"-"+j.toString()+"-01");
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className='row__images'>
                {timelist.map(time =>
                    <div>
                        <div>{time}</div>
                        {/* <p>{place.title}</p> */}
                        {/* <Row title={place.title} lon={place.lon} lat={place.lat} /> */}
                        <Showimage fetchUrl={`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${time}&&dim=0.25&api_key=${API_KEY}`} />
                    </div>
                )}
                {/* <Showimage fetchUrl={`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2022-01-01&&dim=0.25&api_key=${API_KEY}`} /> */}
            </div>
        </div>
    )
}

export default Row