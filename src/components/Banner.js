import React, { useEffect, useState } from 'react'
import "./styles/Banner.css"
import axios from "../client/axios"
import requests from "../client/Requeses"

function Banner() {

    const [movie,SetMovie] = useState([])
    const [suffix, setSuffix] = useState('');

    useEffect(() => {
      const url = window.location.href; // Get the full URL
      const urlParts = url.split('/'); // Split the URL by '/'
      const lastPart = urlParts[urlParts.length - 1]; // Get the last part of the URL
      setSuffix(lastPart); // Set the suffix in the state
    }, []);

    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }

    async function fetchMovieData(){
        let type;
        if(suffix === "Series"){
            type = requests.fetchNetflixSeriesOriginals;
        }
        else {
            type = requests.fetchNetflixMoviesOriginals;
        }
        const request = await axios.get(type);
        const ind = Math.floor(Math.random() * request.data.results.length - 1);
        SetMovie(request.data.results[ind]);
        return request;
    }


    useEffect(() =>{
        fetchMovieData();
    },[])

    //console.log(movie);

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">+ My List</button>
                </div>
                <h2 className="banner__description">{truncate(movie?.overview,150)}</h2>
            </div>
            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner
