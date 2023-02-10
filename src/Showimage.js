import React, {useEffect, useState} from 'react'
import axios from './axios';
import "./Showimage.css"

function Showimage({fetchUrl, isLarge}) {
    console.log(fetchUrl);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data);
            setPlaces(request.data);
            return request;
        };
        fetchData();
    }, [fetchUrl])


  return (
    <div className='showimage'>
        <img
            className={`showimage__img ${isLarge && "showimage__imgLarge"}`} 
            key={places.id}
            src={places.url}
            alt="" />
    </div>
  )
}

export default Showimage