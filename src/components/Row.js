import React, { useEffect, useRef, useState } from 'react';
import "./styles/Row.css";
import axios from "../client/axios";
import TrailerPopup from './TrailerPopup';
import requests from '../client/Requeses';

function Row(props) {
    const [movies, SetMovies] = useState([]);
    const [show, SetShow] = useState(false);
    const [videoId, SetVideoId] = useState(null);
    const [lastClicked, SetLastClicked] = useState(null);
    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', handleWheel);
        return () => cardsRef.current.removeEventListener('wheel', handleWheel); // Cleanup event listener on unmount
    }, []);

    async function fetchData() {
        const request = await axios.get(props.fetchURL);
        SetMovies(request.data.results);
        return request;
    }

    useEffect(() => {
        fetchData();
    }, [props.fetchURL]);

    const baseURL = 'https://image.tmdb.org/t/p/original';

    async function fetchTrailerID(url) {
        const request = await axios.get(url);
        let trailer = request.data.results.find(video => video.type === "Trailer");
        if (trailer === undefined && request.data.results.length != 0) {
            return request.data.results[0].key;
        }
        return trailer?.key;
    }

    const handlePopUp = async (movie) => {
        console.log(movie)

        if (lastClicked != null && movie.id === lastClicked) {
            SetShow(!show);
            return;
        }
        else
            SetShow(true);

        let typeUrl = props.fetchURL.includes('movie')
            ? requests.fetchSMoviesVideos
            : requests.fetchSeriesVideos;

        let resultUrl = typeUrl.replace("___", movie.id);
        const fetchedVideoId = await fetchTrailerID(resultUrl);
        SetVideoId(fetchedVideoId);
        SetLastClicked(movie.id)
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="row__posters" ref={cardsRef}>
                {movies?.map((movie) =>
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) && (
                        <img className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${baseURL}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handlePopUp(movie)} />
                    )
                )}

            </div>
            {show && (
                <TrailerPopup
                    trigger={show}
                    SetShow={SetShow}
                    videoId={videoId}
                />
            )}
        </div>
    );
}

export default Row;
