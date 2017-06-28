import { cardSuccess } from '../../constants/action-types';
import catalogDetails from '../../data/catalog.json';

/* To fetch data from an API call*/
// import { fetchCatelogDetailsData } from './../utils/helper';

/* To fetch data from an API call*/
/* export const fetchCatelogCards = () => {
	return function(dispatch){
		fetchCatelogDetailsData()
		.then(function (response) {
			console.log(response);
		    // Dispatch the success action with the payload
    		dispatch({
		        type: cardSuccess,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Card_FAIL,
		        error: error
		    });
    	});
	};
}*/

export const fetchCatalogCards = () => {
  return {
    type: cardSuccess,
    payload: catalogDetails
  };
};

