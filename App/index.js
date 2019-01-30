import React, {Component} from 'react';
import { StyleSheet, View, Text, ProgressBarAndroid } from 'react-native';
import Weather from './Screens/Weather';
import * as API_KEY from './config/weather';

class App extends Component {

	constructor(props) {
		super(props);
		this.state ={
			isLoading: true,
			temperature: 0,
			weatherCondition: null,
			error: null
		};
	}

	componentWillMount() {
		navigator.geolocation.getCurrentPosition(
		      position => {
		        this.fetchWeather(position.coords.latitude, position.coords.longitude);
		      },
			error => {
				this.setState({
					error: 'Error getting weather conditions'
				});
			},{enableHighAccuracy: true, timeout: 2000, maximumAge: 10000}
			);
	}	

	fetchWeather( lat =25, lon= 25 ){
		fetch(
				`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY.WEATHER_API_KEY}&units=metric`
			)
		.then(res => res.json())
		.then(res => {console.log(res)
			this.setState({
				isLoading: false,
				temperature: res.main.temp,
				weatherCondition: res.weather[0].main
			});
		})
		.catch(err => {
			this.setState({
				error: err
			})
		});
	}

	render() {
		const { isLoading, weatherCondition, temperature } = this.state;
		return (
				<View style={styles.container}>
				{isLoading ? (
					<ProgressBarAndroid />
					// <Text>Fetching the weather</Text>
					) : (
					<Weather weather={weatherCondition} temperature={temperature}/>
					) }
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center'
	}
});

export default App;