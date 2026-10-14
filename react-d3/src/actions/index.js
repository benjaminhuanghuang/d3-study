import { FETCH_DATA } from "./types";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: request.data
  };
};
