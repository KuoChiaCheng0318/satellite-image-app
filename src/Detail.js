import React, {useEffect, useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from './axios';
import "./Detail.css"

function Detail() {
    const { state } = useLocation();
    console.log(state)

    // console.log(fetchUrl);
    console.log(state.url);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(state.url);
            console.log(request.data);
            setPlaces(request.data);
            return request;
        };
        fetchData();
    }, [state.url])
    
  return (
    <div className='detail'>
        {/* <h1>This is detail page</h1> */}
        <div >
            <img
                // className={`showimage__img ${isLarge && "showimage__imgLarge"}`} 
                className='detail__image'
                key={places.id}
                src={places.url}
                alt="" />
        </div>
        <div>
            <p>id: {places.id}</p>
            <p>date: {places.date}</p>
            <p>resource.dataset: {places.resource.dataset}</p>
            <p>resource.planet: {places.resource.planet}</p>
            <p>service_version: {places.service_version}</p>
            <p>url: {places.url}</p>
        </div>
    </div>
  )
}

export default Detail