import React, {Component} from 'react';
import { StyleSheet, View, Text, ProgressBarAndroid } from 'react-native';
import News from './Screens/news';
import * as API_KEY from './config/weather';

class newsIndex extends Component {

	constructor(props) {
		super(props);
		this.state ={
			isLoading: true,
			news: 0,
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
		const { isLoading, news } = this.state;
		return (
				<View style={styles.container}>
				{isLoading ? (
					<ProgressBarAndroid />
					// <Text>Fetching the weather</Text>
					) : (
					<News news={news}/>
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

export default WeatherIndex;