import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductsOverviewScreen = (props) => {
	// shorthand js where right side of function is automatically returned.
	const products = useSelector((state) => state.products.availableProducts);

	const dispatch = useDispatch();

	return (
		<FlatList
			data={products}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {
						props.navigation.navigate("ProductDetail", {
							productId: itemData.item.id,
							productTitle: itemData.item.title,
						});
					}}
					onAddToCart={() => {
						dispatch(cartActions.addToCart(itemData.item));
					}}
				/>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = {
	headerTitle: "All Products",
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
