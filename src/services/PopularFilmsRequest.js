import axios from "axios";
import {API_Base} from "./ApiBase";
import {API_Key} from "./ApiKey";

function getPopularFilms(page){
    return axios.get(API_Base+ "movie/popular"+API_Key+"&language=fr-FR&page="+page).then(res => res.data).catch(err => err)
}

function getTopRatedFilms(page){
    return axios.get(API_Base + "movie/top_rated" + API_Key + "&language=fr-FR&page=" + page).then(res => res.data).catch(err => err)
}

function getUpcommingFilms(page){
    return axios.get(API_Base + "movie/upcoming" + API_Key + "&language=fr-FR&page=" + page).then(res=>res.data).catch(err => err)
}

function getFilm(id) {
    return axios.get(API_Base + "movie/"+id+API_Key+"&language=fr-FR").then(res=>res.data).catch(err => err)
}

function getLesActeurs(id){
    return axios.get(API_Base + "movie/"+id+"/credits"+API_Key+"&language=fr-FR").then(res=>res.data).catch(err => err)
}

function getUnActeurs(id){
    return axios.get(API_Base + "person/"+id+API_Key+"&language=fr-FR").then(res=>res.data).catch(err => err)
}

function getUnActeursCredit(id){
    return axios.get(API_Base + "person/"+id+"/movie_credits"+API_Key+"&language=fr-FR").then(res=>res.data).catch(err => err)
}
export default {getPopularFilms , getTopRatedFilms , getUpcommingFilms , getFilm , getLesActeurs, getUnActeurs, getUnActeursCredit}