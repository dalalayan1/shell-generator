import axios from 'axios';

export default function getData(url){
    return function(dispatch){
        axios.get(url)
            .then((response)=>{
                dispatch({
                    type:'GET_DATA_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:'GET_DATA_FAILURE',
                    payload: error
                })
            })
        }
}