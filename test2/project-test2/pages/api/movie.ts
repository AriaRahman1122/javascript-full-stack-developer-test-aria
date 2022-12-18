import { movies } from "../../data/movie";

export default function handler(req, res) {
    res.status(200).json(movies)
  }