import uuidv4 from 'uuid/v4';
import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: uuidv4(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(storedResult => storedResult.id !== action.deleteResultId);
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default resultsReducer;