import React, { createContext, useEffect, useReducer } from "react";
import appAxios from "../utils/AxiosConfig";

export const moviesStore = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    default:
      return state;
  }
}
const fetchMoviesAction = function (data) {
  return { type: "FETCH", payload: data };
};
function MoviesContext({ children }) {
  const [moviesState, dispatchMoviesState] = useReducer(reducer, []);
  useEffect(() => {
    appAxios
      .get("/movies")
      .then((res) => dispatchMoviesState(fetchMoviesAction(res.data)));
  }, []);
  return (
    <moviesStore.Provider value={moviesState}>{children}</moviesStore.Provider>
  );
}

export default MoviesContext;
