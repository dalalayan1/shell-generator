export default function mainComponentReducers(state={
    details: null
},action){
    switch (action.type) {
        case 'GET_DATA_SUCCESS':{
                let newState = Object.assign({},state, {
                    details: action.payload
                });
                return newState;
            }
        case 'GET_DATA_FAILURE':{
                let newState = Object.assign({}, {
                    details: action.payload
                });
                return newState;
        }
        default: return state;
    }
    
}