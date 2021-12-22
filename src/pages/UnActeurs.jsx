import React, {useEffect, useState} from "react";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import {useParams} from "react-router-dom";
import ActeurCredits from "../components/ActeurCredits";
import PopularFilmsRequest from "../services/PopularFilmsRequest";

const UnActeurs = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [acteur, setActeur] = useState([]);
  const [acteurCredit, setActeurCredit] = useState([]);

  useEffect(() => {
    fetchActeurs(id).then("r");
  }, []);

  const fetchActeurs = async (yourID) => {
    const data = await PopularFilmsRequest.getUnActeurs(yourID);
    const credits = await PopularFilmsRequest.getUnActeursCredit(yourID);
    setActeur(data);
    setActeurCredit(credits);
    setLoading(false);
    // console.log(data);
    // console.log(credits);
  };

  return (
    <>
      {!loading && (
        <>
          <div className="container d-flex mt-3">
            <div className="left d-flex flex-column justify-content-around">
              <img src={"https://image.tmdb.org/t/p/original" + acteur.profile_path} alt={acteur.name} style={{width: "23rem", borderRadius: "25px"}} />
            </div>
            <div className="right d-flex flex-column justify-content-around m-4">
              <div className="d-flex flex-column justify-content-start">
                <h2>{acteur.name}</h2>
                <h5>
                  {acteur.birthday} • {acteur.place_of_birth}
                </h5>
                <h5>Connue dans le domaine "{acteur.known_for_department}"</h5>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h4>Biographie</h4>
                <p>{acteur.biography === "" ? "Ne possède pas de biographie" : acteur.biography}</p>
              </div>
            </div>
          </div>
          <div className="mt-3 container">
            <div className="d-flex justify-content-center">
              <h5>Interprétation ({acteurCredit.cast.length})</h5>
            </div>
            <ScrollMenu>
              {acteurCredit.cast.map((film) => (
                <ActeurCredits key={film.id} image={film.poster_path} titre={film.title} id={film.id} />
              ))}
            </ScrollMenu>
          </div>
        </>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default UnActeurs;
