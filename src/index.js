import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { RuuiProvider, Button, Tooltip, utils } from 'react-universal-ui';
import CalculatorScene from './scene';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		if (utils.isIos) {
			StatusBar.setBarStyle('light-content', true);
		} else if (utils.isAndroid) {
			StatusBar.setTranslucent(true);
		}
		console.disableYellowBox = true;
	}

	render() {
		return <View style={styles.container}>
			<CalculatorScene />
		</View>;
	}
}

function AppContainer(props) {
	return <RuuiProvider>
		<App/>

		<Tooltip/>
	</RuuiProvider>;
}

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
