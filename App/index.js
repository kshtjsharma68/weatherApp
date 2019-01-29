import React, {Component} from 'react';
import { View, Text } from 'react-native';

class App extends Component {

	constructor(props) {
		super(props);
		this.state ={
			isLoading: true
		};
	}
	render() {
		const { isLoading } = this.state;
		return (
				<View>
				{isLoading ? (
					<Text>Fetching the weather</Text>
					) : (
					<Text>Weather app</Text>
					) }
				</View>
			);
	}
}

export default App;