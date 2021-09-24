import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductScreen from "../screens/shop/ProductScreen";

import Colors from "../constants/Colors";

// create stack navigator first has an object pointing to the screens then 2nd argument of options
const ProductsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen,
		ProductDetail: ProductScreen,
	},
	{
		defaultNavigationOptions: {
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
		},
	}
);

export default createAppContainer(ProductsNavigator);
