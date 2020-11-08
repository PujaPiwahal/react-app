import { POKEMON_LIST, POKEMON_DESC, API_ERROR } from "./actionTypes";
import axios from "axios";

export const getList = () => {
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => {
        dispatch({ type: POKEMON_LIST, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: API_ERROR, payload: err.message });
      });
  };
};

export const getDesc = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: POKEMON_DESC, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: API_ERROR, payload: err.message });
      });
  };
};
