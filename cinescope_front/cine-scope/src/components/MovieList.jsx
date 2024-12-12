import React from "react";
import MovieCard from "./MovieCard"; // MovieCard 컴포넌트 가져오기
import "./MovieList.css"; // CSS 파일 가져오기

function MovieList({ movies }) {
  return (
    <div className="flip-card-container row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-4">
      {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
