import React from "react";
import {Link} from "react-router-dom";

const Acteurs = ({img = "", nom = "", id = "", role = ""}) => {
//   console.log(img === null);
  return (
    <>
      <div className="card m-3" style={{width: "12rem", height: "30rem",borderRadius:"25px"}}>
        <div className="d-flex align-items-center" style={{height: "285px"}}>
          <img className="card-img-top" src={img === null ? "https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg" : "https://image.tmdb.org/t/p/w500" + img} alt={nom} style={{borderTopRightRadius:'25px',borderTopLeftRadius:"25px"}} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{nom}</h5>
          <p className="card-text">{role}</p>
          <Link to={"/acteurs/" + id} className="btn btn-primary">
            Voir le details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Acteurs;
