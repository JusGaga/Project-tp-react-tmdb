import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PopularFilmsRequest from "../services/PopularFilmsRequest";

const UnFilms = () => {
    const {id} = useParams();

  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchFilm(id).then('r');
  }, [id]);

  const fetchFilm = async (yourID) => {
    const data = await PopularFilmsRequest.getFilm(yourID);
    setFilm(data);
  };


  return <>
      <div className="container d-flex">
        <div className="left container">
          <img src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt={film.title} />
        </div>
        <div className="right container">
          <div>
            <h1>{film.title}</h1>
            <h5>
              {/* {films.release_date} • {films.genres.map(genre => <span key={genre.id}>{genre.name}</span>)} */}
            </h5>
          </div>
          <div>
            <h3>Synopsis</h3>
            <p>{film.overview}</p>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </>;
};

export default UnFilms;
