import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import React from "react";

import Home from "./pages/Home";
import FilmsPopulaires from "./pages/FilmsPopulaires";
import UnFilms from "./pages/UnFilms";

// const Home = React.lazy(() => import("./pages/Home"));
// const FilmsPopulaires = React.lazy(() => import("./pages/FilmsPopulaires"));

function App() {
  return (
    <>
      <React.Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/films" element={<FilmsPopulaires />} />
              <Route exact path="/films/:id" element={<UnFilms />} />
            </Routes>
          </div>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
