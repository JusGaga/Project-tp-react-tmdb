import React, {useEffect, useState} from "react";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import Slider from "../components/Slider";
import PopularFilmsRequest from "../services/PopularFilmsRequest";

const Home = () => {
  const [filmsPopular, setFilmsPopular] = useState([]);
  const [filmsTopRated, setFilmsTopRated] = useState([]);
  const [filmsUpcomming, setFilmsUpcomming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentpage, setCurrentpage] = useState(1);

  useEffect(() => {
    fetchFilmsPopular(currentpage).then("r");
    fetchFilmsTopRated(currentpage).then("r");
    fetchFilmsUpcoming(currentpage).then("r");
  }, []);

  const fetchFilmsPopular = async (page) => {
    setLoading(true);
    const data = await PopularFilmsRequest.getPopularFilms(page);
    console.log(data);
    setFilmsPopular(data.results);
    setLoading(false);
  };

  const fetchFilmsTopRated = async (page) => {
    setLoading(true);
    const data = await PopularFilmsRequest.getTopRatedFilms(page);
    console.log(data);
    setFilmsTopRated(data.results);
    setLoading(false);
  };

  const fetchFilmsUpcoming = async (page) => {
    setLoading(true);
    const data = await PopularFilmsRequest.getUpcommingFilms(page);
    console.log(data);
    setFilmsUpcomming(data.results);
    setLoading(false);
  };

  return (
    <>
      {!loading && (
        <>
          <div className="m-5">
            <h4 className="px-2 mb-0">Populaires</h4>
            <ScrollMenu>
              {filmsPopular.map((film) => (
                <Slider key={film.id} titre={film.title} image={film.poster_path} id={film.id} />
              ))}
            </ScrollMenu>
          </div>
          <div className="m-5">
            <h4 className="px-2 mb-0">Les mieux Notées</h4>
            <ScrollMenu>
              {filmsTopRated.map((film) => (
                <Slider key={film.id} titre={film.title} image={film.poster_path} id={film.id} />
              ))}
            </ScrollMenu>
          </div>
          <div className="m-5">
            <h4 className="px-2 mb-0">A venir</h4>
            <ScrollMenu>
              {filmsUpcomming.map((film) => (
                <Slider key={film.id} titre={film.title} image={film.poster_path} id={film.id} />
              ))}
            </ScrollMenu>
          </div>
        </>
      )}
      {loading && (
        <div id="loading-icon" className="mt-5">
          Loading...
        </div>
      )}
    </>
  );
};

export default Home;
