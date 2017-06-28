import { cardSuccess } from '../../constants/action-types';

export default function CardContainerReducer(state = {}, action) {
    switch (action.type) {
        case cardSuccess:
            return Object.assign({}, state, {
                cardData: action.payload
            });
        default:
            return state;
    }
}