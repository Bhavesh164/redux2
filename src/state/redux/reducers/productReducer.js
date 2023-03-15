import { ActionTypes } from "../constant/action-types";
const initialState={
	products:[
		{
			id:1,
			title: "bhavesh",
			category: "programmer",
	    },
	],
}
export const productReducer = (state=initialState,{type,payload}) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;		
		default:
			return state;		
	}
};

export const selectedProductReducer = (state=initialState,{type,payload}) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCTS:
			return state;		
		default:
			return state;		
	}
};
