import React, { useState } from "react";
import ModalView from "./modal/ModalView"; // ModalView 컴포넌트 가져오기
import MovieDetail from "./modal/MovieDetail"; // MovieDetail 컴포넌트 가져오기
import notFoundImg from "../assets/not-found-image.jpeg"; // 이미지 경로
import "./MovieCard.css"; // 스타일 파일

function MovieCard({ movie }) {
  const [isModalViewed, setIsModalViewed] = useState(false);

  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : notFoundImg;

  const handleModalOpen = () => {
    setIsModalViewed(true);
    document.body.classList.add("modal-open");
  };

  const handleModalClose = () => {
    setIsModalViewed(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="col">
      {isModalViewed && (
        <ModalView onClose={handleModalClose}>
          <MovieDetail
            movieId={movie.id || movie.tmdb_movie_id}
            movieName={movie.title || movie.name}
            movieVideo={movie.video_path}
            movieOverview={movie.overview}
            movieVote={movie.vote_average}
            movieDate={movie.release_date}
            movieActor={movie.actors}
            movieGenre={movie.genres}
          />
        </ModalView>
      )}
      <div className="flip-card" onClick={handleModalOpen}>
        <div className="card-front">
          <figure>
            <div className="img-bg"></div>
            <img src={posterPath} alt={movie.title || "Movie Poster"} />
          </figure>
        </div>
        <div className="card-back">
          <figure>
            <div className="img-bg"></div>
            <img src={posterPath} alt={movie.title || "Movie Poster"} />
          </figure>
          <ul className="card-ul">
            <li>{movie.title || movie.name}</li>
            <div className="transformers-right">
              {/* 별점 표시 */}
              <span className="card-star">
                {Math.round((parseFloat(movie.vote_average) / 2) * 10) / 10} ★
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
