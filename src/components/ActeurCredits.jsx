import React from "react";
import { Link } from "react-router-dom";

const Slider = ({image="",titre="",id=""}) => {
  return (
    <>
        <div className="card m-3" style={{width: "14rem", height: "33rem"}}>
          <img className="card-img-top" src={image === null ? "https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg" : "https://image.tmdb.org/t/p/w500" + image} alt={titre} />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{titre}</h5>
            <Link to={"/films/" + id} className="btn btn-primary">
              Voir le details
            </Link>
          </div>
        </div>
    </>
  );
};

export default Slider;
