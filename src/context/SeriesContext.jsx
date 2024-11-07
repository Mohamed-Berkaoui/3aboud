import React, { createContext, useEffect, useReducer } from "react";
import appAxios from "../utils/AxiosConfig";

export const seriesStore = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    default:
      return state;
  }
}
const fetchSeriesAction = function (data) {
  return { type: "FETCH", payload: data };
};
function SeriesContext({ children }) {
  const [seriesState, dispatchSeiresState] = useReducer(reducer, []);
  useEffect(() => {
    appAxios
      .get("/series")
      .then((res) => dispatchSeiresState(fetchSeriesAction(res.data)));
  }, []);
  return (
    <seriesStore.Provider value={seriesState}>{children}</seriesStore.Provider>
  );
}

export default SeriesContext;
