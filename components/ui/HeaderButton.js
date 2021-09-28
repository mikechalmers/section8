import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colours from "../../constants/Colors";
import { render } from "react-dom";

const CustomHeaderButton = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? "white" : Colours.primary}
		/>
	);
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
