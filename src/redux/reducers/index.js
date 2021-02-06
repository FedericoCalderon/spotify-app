import { GET_SONG_BY_QUERY } from '../actions/index'

const initialState = {
    songsBySearch: null,
}
function reducer(state = initialState, action) {
    
    switch(action.type) {
        case GET_SONG_BY_QUERY:

            return {
                ...state, 
                songsBySearch: action.payload,
            };
        default:
            return state;
    }
}


export default reducer;


