import React, { useContext, useState } from "react";
import { seriesStore } from "../context/SeriesContext";
import Box from "../components/Box";
import Search from "../components/Search";

function Series() {
  const seires = useContext(seriesStore);
  const [search,setSearch]=useState({title:"",category:""})

  return (
<div>
    <Search setSearch={setSearch}/>
<div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      {seires.filter((movie) =>
            search.title
              ? movie.title.toLowerCase().includes(search.title.toLowerCase())
              : movie
          )
          .filter(movie=>search.category?movie.category===search.category:movie).map((movie) => (
        <Box key={movie.id} element={movie} />
      ))}
    </div>
</div>
  );
}

export default Series;
