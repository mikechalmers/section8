import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
	items: {},
	sum: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const addedProduct = action.product;
			const productPrice = addedProduct.price;
			const productTitle = addedProduct.title;

			let updateOrNewCartItem;

			if (state.items[addedProduct.id]) {
				// item already in cart
				updateOrNewCartItem = new CartItem(
					state.items[addedProduct.id].quantity + 1,
					productPrice,
					productTitle,
					state.items[addedProduct.id].sum + productPrice
				);
				// return {
				// 	...state,
				// 	items: { ...state.items, [addedProduct.id]: updatedCartItem },
				// 	sum: state.sum + productPrice,
				// };
			} else {
				updateOrNewCartItem = new CartItem(
					1,
					productPrice,
					productTitle,
					productPrice
				);
			}
			return {
				...state,
				items: { ...state.items, [addedProduct.id]: updateOrNewCartItem },
				sum: state.sum + productPrice,
			};
	}
	return state;
};
