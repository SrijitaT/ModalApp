import axios from "axios";
import {GET_NOTES,SET_LOADER,ADD_NOTE} from "./types";

const setLoader = () => {
    return {
      type: SET_LOADER
    };
  };
  export const addANote = (data) => {
    return {
      type: ADD_NOTE,
      payload : data
    };
  };
export const addNote = data => dispatch => {
    return axios.post("/api/notes", data)
  };
  
  // Get Posts
export const getNotes = () => dispatch => {
    dispatch(setLoader());
    axios
      .get("/api/notes")
      .then(res =>
        {
        dispatch({
          type: GET_NOTES,
          payload: res.data
        })
       }
      )
      .catch(err =>
        dispatch({
          type: GET_NOTES,
          payload: null
        })
      );
  };