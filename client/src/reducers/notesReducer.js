import {GET_NOTES,SET_LOADER,ADD_NOTE} from "../actions/types";
const initialState = {
    data: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_LOADER:
        return {
          ...state,
          loading: true
        };
      case GET_NOTES:
        return {
          ...state,
          data: action.payload,
          loading: false
        };
        case ADD_NOTE:
            return {
                data:state.data.concat(action.payload),
                loading:false
            }
      default:
        return {...state}
    }
}