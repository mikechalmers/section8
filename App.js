import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
	return Font.loadAsync({
		"exposit-regular": require("./assets/fonts/ExpositRegular.otf"),
		"exposit-bold": require("./assets/fonts/ExpositBold.otf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setFontLoaded(true);
				}}
				onError={() => {}}
			/>
		);
	}

	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	);
}
