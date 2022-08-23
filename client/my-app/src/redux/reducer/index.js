import { GET_FOOD } from "../actions/actionTypes";

const initialState = {
    food : [],
}

export default function rootReducer(state = initialState,{type, payload}){
    switch(type){

        case GET_FOOD : 
        return {
            ...state ,
            food : payload
        }

         default : return  state 
    }
}