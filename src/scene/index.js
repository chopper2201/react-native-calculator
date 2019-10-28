import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { initialState, calculator } from '../utils/configs';
import Button from '../components/Button';

type Props = {

};

class CalculatorScene extends Component {
	props: Props;

	state = initialState;

	handleButtonPress = (type, value) => {
		this.setState(state => calculator(type, value, state));
	};

	render() {
		const { displayValue } = this.state;
		return <View style={styles.container}>
			<SafeAreaView>
				<Text style={styles.value}>
					{displayValue.toLocaleString()}
				</Text>
				<View style={styles.row}>
					<Button
						text="AC"
						theme="gray"
						onPress={() => this.handleButtonPress('clear')}
					/>
					<Button
						text="+/-"
						theme="gray"
						onPress={() => this.handleButtonPress('posneg')}
					/>
					<Button
						text="%"
						theme="gray"
						onPress={() => this.handleButtonPress('percentage')}
					/>
					<Button
						text="/"
						theme="yellow"
						onPress={() => this.handleButtonPress('operator', '/')}
					/>
				</View>

				<View style={styles.row}>
					<Button
						text="7"
						onPress={() => this.handleButtonPress('number', 7)}
					/>
					<Button
						text="8"
						onPress={() => this.handleButtonPress('number', 8)}
					/>
					<Button
						text="9"
						onPress={() => this.handleButtonPress('number', 9)}
					/>
					<Button
						text="x"
						theme="yellow"
						onPress={() => this.handleButtonPress('operator', '*')}
					/>
				</View>

				<View style={styles.row}>
					<Button
						text="4"
						onPress={() => this.handleButtonPress('number', 4)}
					/>
					<Button
						text="5"
						onPress={() => this.handleButtonPress('number', 5)}
					/>
					<Button
						text="6"
						onPress={() => this.handleButtonPress('number', 6)}
					/>
					<Button
						text="-"
						theme="yellow"
						onPress={() => this.handleButtonPress('operator', '-')}
					/>
				</View>

				<View style={styles.row}>
					<Button
						text="1"
						onPress={() => this.handleButtonPress('number', 1)}
					/>
					<Button
						text="2"
						onPress={() => this.handleButtonPress('number', 2)}
					/>
					<Button
						text="3"
						onPress={() => this.handleButtonPress('number', 3)}
					/>
					<Button
						text="+"
						theme="yellow"
						onPress={() => this.handleButtonPress('operator', '+')}
					/>
				</View>

				<View style={styles.row}>
					<Button
						text="0"
						size="large"
						onPress={() => this.handleButtonPress('number', 0)}
					/>
					<Button
						text="."
						onPress={() => this.handleButtonPress('number', '.')}
					/>
					<Button
						text="="
						theme="yellow"
						onPress={() => this.handleButtonPress('equal')}
					/>
				</View>
			</SafeAreaView>
		</View>;
	}
}

export default CalculatorScene;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202020',
		justifyContent: 'flex-end'
	},
	value: {
		color: '#fff',
		fontSize: 40,
		textAlign: 'right',
		marginRight: 20,
		marginBottom: 10
	},
	row: {
		flexDirection: 'row',
	}
});
