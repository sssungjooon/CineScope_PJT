import React from "react";
import MovieDetailInfo from "./MovieDetailInfo"; // MovieDetailInfo 컴포넌트 가져오기
import MovieDetailAdd from "./MovieDetailAdd"; // MovieDetailAdd 컴포넌트 가져오기
import "./MovieDetail.css"; // 스타일 파일

function MovieDetail({
  movieId,
  movieName,
  movieVideo,
  movieOverview,
  movieVote,
  movieDate,
  movieActor,
  movieGenre,
}) {
  return (
    <section id="movie-detail-section">
      <div id="detail-info-flex">
        <MovieDetailInfo
          movieId={movieId}
          movieName={movieName}
          movieVideo={movieVideo}
          movieOverview={movieOverview}
          movieVote={movieVote}
          movieDate={movieDate}
        />
      </div>
      {/* 리뷰 관련 컴포넌트는 현재 주석 처리 */}
      {/* <div id="review-flex">
        <MovieDetailReview movieId={movieId} />
      </div> */}
      <div id="add-flex">
        <MovieDetailAdd movieActor={movieActor} movieGenre={movieGenre} />
      </div>
    </section>
  );
}

export default MovieDetail;
