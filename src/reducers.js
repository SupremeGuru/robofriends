import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={})=>{
    // This is a reducer function
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});  // You can also use this syntax { ... state, {searchField: action.payload});}
        default:
            return state;
    }
}