export default function mainComponentReducers(state={
    feeling: null
},action){
    switch (action.type) {
        case 'GET_DATA_SUCCESS':{
                let newState = Object.assign({},state, {
                    feeling: action.payload
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