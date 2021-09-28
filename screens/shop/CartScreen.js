import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const CartScreen = (props) => {
	const cartTotal = useSelector((state) => state.cart.sum);
	const cartItems = useSelector((state) => {
		// make the cart items from state into an array of objects
		const transCart = [];
		for (const key in state.cart.items) {
			transCart.push({
				productId: key,
				productTitle: state.cart.items[key].productTitle,
				productPrice: state.cart.items[key].productPrice,
				quantity: state.cart.items[key].quantity,
				sum: state.cart.items[key].sum,
			});
		}
		return transCart;
	});
	return (
		<View style={styles.screen}>
			<View style={styles.summary}>
				<Text style={styles.summaryText}>
					Total: <Text style={styles.amount}>£{cartTotal.toFixed(2)}</Text>
				</Text>
				<Button
					color={Colors.accent}
					title='Order Now'
					disabled={cartItems.length === 0}
				/>
			</View>
			<View>
				<Text>Cart Items</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		margin: 20,
	},
	summary: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
		padding: 10,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: "white",
	},
	summaryText: {
		fontFamily: "exposit-bold",
		fontSize: 18,
	},
	amount: {
		color: Colors.primary,
	},
});

export default CartScreen;
