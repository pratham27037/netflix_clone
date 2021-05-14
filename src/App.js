import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/*Nav bar*/}
      <Nav/>
      {/*banner*/}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Fantacy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="Chrime Movies" fetchUrl={requests.fetchChrimeMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
