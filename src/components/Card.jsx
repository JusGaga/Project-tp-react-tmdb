import React from "react";
import {Link} from "react-router-dom";
import '../styles/Card.css';

const Card = ({image="",titre="",synopsis="",id=""}) => {
  return (
    <>
      <div className="card mt-4" style={{width: "18rem", height: "45rem"}}>
        <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500"+image} alt={titre} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text restrict-text">{synopsis}</p>
          <Link to={"/films/" + id} className="btn btn-primary">
            Voir le details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
