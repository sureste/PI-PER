import axios from 'axios'
import { GET_FOOD } from './actionTypes'


export function getFood(){
    return async (dispatch) => {
        try {
            
            let result = await axios.get("http://localhost:3001/food");
            
            return dispatch ({
                type : GET_FOOD,
                payload : result.data
            })
        } catch (err) {

         console.log(err)   
         
        }
        }
    }