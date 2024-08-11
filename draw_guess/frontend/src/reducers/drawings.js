import {
    DRAWINGS_LOADED
} from "../actions/types";

const initialState = {
    all: [],
    one: null,
};

const actionMap = {
    DRAWINGS_LOADED: (state, action) => {
        return {
            ...state,
            all: action.payload
        };
    },
    DRAWING_LOADED: (state, action) => {
        return {
            ...state,
            one: action.payload
        };
    },
};

export default function(state = initialState, action) {
    for(let actionType in actionMap){
        if(action.type === actionType){
            return actionMap[actionType](state, action);
            break;
        }
    }

    return {...state};
};
