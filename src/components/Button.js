import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

export default ({ onPress, text, size, theme }) => {
	const buttonStyles = [styles.button];
	const textStyles = [styles.text];

	if (size === 'large') {
		buttonStyles.push(styles.buttonLarge);
	}

	if (theme === 'gray') {
		buttonStyles.push(styles.buttonGray);
		textStyles.push(styles.textGray);
	} else if (theme === 'yellow') {
		buttonStyles.push(styles.buttonYellow);
	}

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyles}>
			<Text style={textStyles}>{text}</Text>
		</TouchableOpacity>
	);
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		fontSize: 25
	},
	textGray: {
		color: '#060606'
	},
	button: {
		backgroundColor: '#333333',
		flex: 1,
		height: Math.floor(buttonWidth - 10),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Math.floor(buttonWidth),
		margin: 5
	},
	buttonLarge: {
		width: screen.width / 2 - 10,
		flex: 0,
		alignItems: 'flex-start',
		paddingLeft: 40
	},
	buttonGray: {
		backgroundColor: '#A6A6A6'
	},
	buttonYellow: {
		backgroundColor: '#F09A36'
	}
});
