import { movies } from "../../data/movie";

export default function handler(req, res) {
  console.log(req.query)
  if(req.query.keyword) {
    res.status(200).json(movies.filter(movie => movie.title.toLowerCase().includes(req.query.keyword.toLowerCase())))
  }
  else {
    res.status(200).json(movies)
  }
    
  }