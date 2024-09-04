import requests from "../../client/Requeses"

export const movieRows = [
    {id: 1, title: "Netflix Originals", fetchURL: requests.fetchNetflixMoviesOriginals, isLargeRow: true},
    {id: 2, title: "Trending Now", fetchURL: requests.fetchTrendingMovies, isLargeRow: true},
    {id: 3, title: "Top Rated", fetchURL: requests.fetchTopRatedMovies, isLargeRow: true},
    {id: 4, title: "Action Movies", fetchURL: requests.fetchActionMovies, isLargeRow: true},
    {id: 5, title: "Comedy Movies", fetchURL: requests.fetchComedyMovies, isLargeRow: true},
    {id: 6, title: "Horror Movies", fetchURL: requests.fetchHorrorMovies, isLargeRow: true},
    {id: 7, title: "Romance Movies", fetchURL: requests.fetchRomanceMovies, isLargeRow: true},
    {id: 8, title: "Documentaries", fetchURL: requests.fetchDocumentaryMovies, isLargeRow: true},
];

export const seriesRows = [
    {id: 1, title: "Netflix Originals", fetchURL: requests.fetchNetflixSeriesOriginals, isLargeRow: true},
    {id: 2, title: "Trending Now", fetchURL: requests.fetchTrendingSeries, isLargeRow: true},
    {id: 3, title: "Top Rated", fetchURL: requests.fetchTopRatedSeries, isLargeRow: true},
    {id: 4, title: "Action Series", fetchURL: requests.fetchActionSeries, isLargeRow: true},
    {id: 5, title: "Comedy Series", fetchURL: requests.fetchComedySeries, isLargeRow: true},
    {id: 6, title: "Animation Series", fetchURL: requests.fetchAnimationSeries, isLargeRow: true},
    {id: 7, title: "Mystery Series", fetchURL: requests.fetchMysterySeries, isLargeRow: true},
    {id: 8, title: "Documentaries", fetchURL: requests.fetchDocumentarySeries, isLargeRow: true},
];