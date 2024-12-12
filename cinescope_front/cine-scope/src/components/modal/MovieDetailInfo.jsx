import React, { useState } from "react";
import StarRating from "react-star-ratings"; // React에서 별점 표시를 위한 라이브러리
import "./MovieDetailInfo.css";

function MovieDetailInfo({
  movieId,
  movieName,
  movieVideo,
  movieOverview,
  movieVote,
  movieDate,
}) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [normal, setNormal] = useState(true);

  const videoUrl = `https://www.youtube.com/embed/${movieVideo}`;

  const handleLikeClick = () => {
    setLike(true);
    setDislike(false);
    setNormal(false);
    // 좋아요 관련 API 호출 가능
  };

  const handleDislikeClick = () => {
    setLike(false);
    setDislike(true);
    setNormal(false);
    // 싫어요 관련 API 호출 가능
  };

  const handleNormalClick = () => {
    setLike(false);
    setDislike(false);
    setNormal(true);
  };

  return (
    <div className="movie-info-section">
      <div className="trailer-container">
        <iframe src={videoUrl} frameBorder="0" title={movieName}></iframe>
      </div>
      <section className="information-container">
        <h2 className="movie-title">{movieName}</h2>
        <h4 className="movie-date">{movieDate}</h4>
        <div className="transformers-right">
          <StarRating
            rating={parseFloat(movieVote) / 2}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
        <div className="score-like-button-box">
          {normal && (
            <i
              className="fa-solid fa-heart-circle-plus"
              id="movie-normal-button"
              onClick={handleLikeClick}
            ></i>
          )}
          {like && (
            <i
              className="fa-solid fa-heart-circle-check"
              id="movie-like-button"
              onClick={handleDislikeClick}
            ></i>
          )}
          {dislike && (
            <i
              className="fa-solid fa-heart-circle-xmark"
              id="movie-dislike-button"
              onClick={handleNormalClick}
            ></i>
          )}
        </div>
      </section>
      <div className="overview-container">{movieOverview}</div>
    </div>
  );
}

export default MovieDetailInfo;
