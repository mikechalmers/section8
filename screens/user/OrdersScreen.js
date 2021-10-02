import React from "react";
import { Text, FlatList, StyleSheet, Platform } from "react-native";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/ui/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = (props) => {
	const orders = useSelector((state) => state.orders.orders);
	// console.log("orders are: ");
	// console.log(orders);
	return (
		<FlatList
			data={orders}
			renderItem={(itemData) => (
				<OrderItem
					amount={itemData.item.totalAmount}
					date={itemData.item.readableDate}
				/>
			)}
		/>
	);
};

OrdersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Your Orders",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='Menu'
					iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({});

export default OrdersScreen;
