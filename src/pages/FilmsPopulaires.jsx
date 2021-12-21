import { Pagination } from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from "react";
import Card from "../components/Card";
import PopularFilmsRequest from "../services/PopularFilmsRequest";
// import "../styles/loading-icon.css";


const FilmsPopulaires = () => {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchFilms(currentPage).then("r");
  }, []);

  const fetchFilms = async (page) => {
    const data = await PopularFilmsRequest.getPopularFilms(page)
    setCurrentPage(data.page);
    setFilms(data.results);
    setTotalPages(data.total_pages)
    setLoading(false);
  };

  const handleChangePage = (event,page) =>{
      
    setCurrentPage(page);
    fetchFilms(page);

  }

 return (
    <>
    {!loading && <>
      <div className="d-flex justify-content-around flex-wrap">
          
        {films.map((film) => (
          <Card key={film.id} image={film.poster_path} titre={film.title} synopsis={film.overview} id={film.id}/>
        ))}
        </div>
             <div className="mt-2 d-flex justify-content-center">
                 <Pagination count={totalPages} siblings={2} size="large" page={currentPage} onChange={handleChangePage}/>
             </div>
        </>}
        {loading && <div id="loading-icon" className="mt-5">Loading...</div>}
      
    </>
  );
};

export default FilmsPopulaires;
