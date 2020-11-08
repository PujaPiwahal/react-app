import { POKEMON_LIST, POKEMON_DESC, API_ERROR } from "./actionTypes";

const initialState = {
  list: {},
  desc: null,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POKEMON_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case POKEMON_DESC:
      return {
        ...state,
        desc: action.payload,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
