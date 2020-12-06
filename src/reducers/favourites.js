import { SET_FAVOURITE } from '../actions/favouriteActions';

const favList = [];
const initialState = {
    favList,
};

export const favourites = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITE:
            var payload =  {...action.payload.movie}
            if (favList.find(( {id})=> id === payload.id)) {
                payload =  {};
                return state;
            }
            else { 
            favList.push(payload);
            console.log(favList);
            return {
                ...state,
                favList
            }
        }
            
        default:
            return state;
    }
}