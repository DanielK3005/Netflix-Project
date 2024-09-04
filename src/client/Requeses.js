

const APIKey = 'a995686a55a20227315e565d02c4c063';

const requests = {
    fetchNetflixSeriesOriginals:`/discover/tv?api_key=${APIKey}&with_networks=213`,
    fetchNetflixMoviesOriginals:`/discover/movie?api_key=${APIKey}&with_networks=213`,
    fetchTrendingMovies:`/trending/movie/week?api_key=${APIKey}&language=en-US`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKey}&with_genres=10749`,
    fetchDocumentaryMovies:`/discover/movie?api_key=${APIKey}&with_genres=99`,
    fetchSMoviesVideos:`/movie/___/videos?api_key=${APIKey}`,
    fetchTrendingSeries:`/trending/tv/week?api_key=${APIKey}&language=en-US`,
    fetchTopRatedSeries:`/tv/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionSeries:`/discover/tv?api_key=${APIKey}&with_genres=10759`,
    fetchComedySeries:`/discover/tv?api_key=${APIKey}&with_genres=35`,
    fetchAnimationSeries:`/discover/tv?api_key=${APIKey}&with_genres=16`,
    fetchMysterySeries:`/discover/tv?api_key=${APIKey}&with_genres=9648`,
    fetchDocumentarySeries:`/discover/tv?api_key=${APIKey}&with_genres=99`,
    fetchSeriesVideos:`/tv/___/videos?api_key=${APIKey}`
}

export default requests;