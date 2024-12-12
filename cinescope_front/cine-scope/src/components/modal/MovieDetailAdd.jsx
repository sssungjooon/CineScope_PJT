import React, { useEffect, useState } from "react";
import ActorListItem from "./ActorListItem";
import axios from "axios";
import "./MovieDetailAdd.css";

function MovieDetailAdd({ movieActor, movieGenre }) {
  const [genreNameList, setGenreNameList] = useState([]);

  useEffect(() => {
    const getGenreInfo = async () => {
      const names = [];
      for (const genreId of movieGenre) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/movies/genres/${genreId}`
          );
          names.push(response.data.name);
        } catch (error) {
          console.error("Failed to fetch genre info:", error);
        }
      }
      setGenreNameList(names);
    };

    getGenreInfo();
  }, [movieGenre]);

  return (
    <div className="second-info-section">
      <div className="detail-genre">
        <h4>장르 :</h4>
        <div className="genre-list">
          {genreNameList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="more-info">
        <h4 className="actor_info">배우 정보</h4>
        <section className="information-container">
          {movieActor.map((actor, idx) => (
            <ActorListItem key={idx} actor={actor} className="actors" />
          ))}
        </section>
      </div>
      <div className="add-button">
        <a href="http://localhost:8080/review">
          <button>Review</button>
        </a>
      </div>
    </div>
  );
}

export default MovieDetailAdd;
