import React, {useEffect, useState} from 'react'
import axios from './axios';
import "./Showimage.css"
import { Link } from "react-router-dom";

function Showimage({fetchUrl, isLarge}) {
    // const { state } = useLocation();
    // console.log(state)

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
        <div>
            {/* {places.id} */}
            {/* <Link to={`/detail/` + places.id}> */}
            <Link to={{pathname:`/detail/` + places.id, state:{url:fetchUrl}}}>
            
                <img
                    className={`showimage__img ${isLarge && "showimage__imgLarge"}`} 
                    key={places.id}
                    src={places.url}
                    alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Showimage