import { cardSuccess } from './..constants/action-types';
import catalogDetails from './../data/catalog.json';

export const fetchCatelogCards = () => {
    return {
        type: cardSuccess,
        payload: catalogDetails
    }
}