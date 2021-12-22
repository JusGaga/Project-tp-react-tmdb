import React, {useEffect, useState} from "react";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import {useParams} from "react-router-dom";
import Acteurs from "../components/Acteurs";
import PopularFilmsRequest from "../services/PopularFilmsRequest";

const UnFilms = () => {
  const {id} = useParams();

  const [film, setFilm] = useState([]);
  const [acteur, setActeur] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFilm(id).then("r");
  }, [id]);

  const fetchFilm = async (yourID) => {
    const data = await PopularFilmsRequest.getFilm(yourID);
    const act = await PopularFilmsRequest.getLesActeurs(yourID);
    console.log(data);
    console.log(act);
    setFilm(data);
    setActeur(act);
    setLoading(false);
  };

  return (
    <>
      {!loading && (
        <>
          <div style={{background: `url(https://image.tmdb.org/t/p/w500${film.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "25px"}}>
            <div className="container  mt-3" style={{background: "linear-gradient(to right, rgba(12.94%, 11.37%, 16.08%, 1.00) 150px, rgba(12.94%, 11.37%, 16.08%, 0.80) 100%)", borderRadius: "25px"}}>
              <div className="p-4 d-flex">
                <img src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt={film.title} style={{width: "23rem", borderRadius: "25px"}} />
                <div className="right container d-flex flex-column justify-content-around text-light mx-4">
                  <div>
                    <h1>{film.title}</h1>
                    <h5>
                      {film.release_date} • {film.genres.map((genre) => genre.name).join(", ")} • {Math.round(film.runtime / 60) + " h " + (film.runtime % 60)}
                    </h5>
                  </div>
                  <div>
                    <h3>Synopsis</h3>
                    <p>{film.overview}</p>
                  </div>
                  <div className="d-flex justify-content-around">
                    {film.production_companies.map((prod) => (
                      <div key={prod.id} className="d-flex align-items-center justify-content-center">
                        <img className="m-2" key={prod.id} src={"https://image.tmdb.org/t/p/original" + prod.logo_path} alt={prod.name} style={{width: "100%", maxWidth: "100px"}} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-45rem">
            <h4>Acteurs</h4>
          </div>
          <ScrollMenu>
            {acteur.cast.map((acteurs) => (
              <Acteurs key={acteurs.id} img={acteurs.profile_path} nom={acteurs.name} id={acteurs.id} role={acteurs.character} />
            ))}
          </ScrollMenu>
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

export default UnFilms;
