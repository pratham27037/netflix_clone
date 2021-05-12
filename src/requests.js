const APIKEY="06fde19d4d12d485f0d34897990e86ea";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US&region`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentariesMovies:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchFantasyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=14`,
    fetchMysteryMovies:`/discover/movie?api_key=${APIKEY}&with_genres=9648`,
    fetchChrimeMovies:`/discover/movie?api_key=${APIKEY}&with_genres=80`,
    fetchAnimatedMovies:`/discover/movie?api_key=${APIKEY}&with_genres=16`,
}

export default requests;