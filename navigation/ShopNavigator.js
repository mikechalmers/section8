import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductScreen from "../screens/shop/ProductScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/user/OrdersScreen";

import Colors from "../constants/Colors";
import { color } from "react-native-reanimated";

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primary : "",
	},
	headerTitleStyle: {
		fontFamily: "exposit-bold",
	},
	headerBackTitleStyle: {
		fontFamily: "exposit-regular",
	},
	headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

// create stack navigator first has an object pointing to the screens then 2nd argument of options
const ProductsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen,
		ProductDetail: ProductScreen,
		Cart: CartScreen,
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
		defaultNavigationOptions: defaultNavOptions,
	}
);

const OrdersNavigator = createStackNavigator(
	{
		orders: OrdersScreen,
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === "android" ? "md-list" : "ios-list"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
		defaultNavigationOptions: defaultNavOptions,
	}
);

const ShopNavigator = createDrawerNavigator(
	{
		Products: ProductsNavigator,
		Orders: OrdersNavigator,
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary,
		},
	}
);

export default createAppContainer(ShopNavigator);
