import React, { useContext, useState } from "react";
import { moviesStore } from "../context/MoviesContext";
import Box from "../components/Box";
import Search from "../components/Search";

function Movies() {
  const movies = useContext(moviesStore);
  const [search, setSearch] = useState({ title: "", category: "" });
  console.log("🚀 ~ Movies ~ search:", search);

  return (
    <div>
      <Search setSearch={setSearch} />
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {movies
          .filter((movie) =>
            search.title
              ? movie.title.toLowerCase().includes(search.title.toLowerCase())
              : movie
          )
          .filter(movie=>search.category?movie.category===search.category:movie)
          .map((movie) => (
            <Box key={movie.id} element={movie} />
          ))}
      </div>
    </div>
  );
}

export default Movies;
