import React from "react";

import {
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Text,
	Image,
	Button,
	StyleSheet,
	Platform,
} from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = (props) => {
	let TouchableDyanmic = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableDyanmic = TouchableNativeFeedback;
	}

	return (
		<TouchableDyanmic onPress={props.onViewDetail} useForeground>
			<View style={styles.product}>
				<Image style={styles.image} source={{ uri: props.image }} />
				<View style={styles.texts}>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.price}>£{props.price.toFixed(2)}</Text>
				</View>

				<View style={styles.buttonRow}>
					<Button
						color={Colors.primary}
						title='View Details'
						onPress={props.onViewDetail}
					/>
					<Button
						color={Colors.primary}
						title='Add to Cart'
						onPress={props.onAddToCart}
					/>
				</View>
			</View>
		</TouchableDyanmic>
	);
};

const styles = StyleSheet.create({
	product: {
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: "white",
		height: 300,
		margin: 20,
	},
	image: {
		width: "100%",
		height: "60%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	texts: {
		alignItems: "center",
		height: "15%",
	},
	title: {
		fontFamily: "exposit-bold",
		fontSize: 18,
		marginVertical: 11,
	},
	price: {
		fontSize: 14,
		color: "#888",
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "25%",
		paddingHorizontal: 20,
	},
});

export default ProductItem;
