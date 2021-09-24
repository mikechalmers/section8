import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

const ProductScreen = (props) => {
	const productId = props.navigation.getParam("productId");

	const selectedProduct = useSelector((state) =>
		state.products.availableProducts.find((product) => product.id === productId)
	);

	return (
		<View>
			<Text>{selectedProduct.title}</Text>
		</View>
	);
};

ProductScreen.navigationOptions = (navData) => {
	return {
		headerTitle: navData.navigation.getParam("productTitle"),
	};
};

const styles = StyleSheet.create({});

export default ProductScreen;
