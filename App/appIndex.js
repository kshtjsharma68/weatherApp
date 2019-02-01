import React, {Component} from 'react';
import { View, Button, ImageBackground, ProgressBarAndroid, ActivityIndicator } from 'react-native'; 
import WeatherIndex from './weatherIndex';
import HackerNews from './newsIndex';

class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		};
	}

	showWeather = () => {
		this.setState({
			weather: !this.state.weather
		});
	};

	showNews = () => {
		this.setState({
			news: !this.state.news
		});
	}

	ComponentDidMount() {
		this.setState({
			isLoading: true
		});
	}

	render() {
		const { isLoading } = this.state;
		const { navigation } = this.props;
		return (
				<View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column'}}>
					<ImageBackground 
						source={{uri: 'https://cdn.thecustomdroid.com/wp-content/uploads/2018/02/Download-Redmi-Note-5-Wallpapers-Preview-8.jpg'}}
						style={{ width: '100%', height: '100%' }}
					>
					{
						isLoading ?
						<View style={{justifyContent: 'center'}}>
							<Button 
								onPress={() => navigation.navigate('Weather')}
								title="Weather"
								color="green"
								style={{ 'width': 50 }}
							 />
							 <Button 
								onPress={() => navigation.navigate('News')}
								title="News"
								color="blue"
								style={{ 'width': 50 }}
							 />
						</View>	
						:
						<View>
							<ActivityIndicator animating={true} size="large" color="#00ff00" />
							<Text>Try reloading the page...</Text>
						</View>	 

					}
					</ImageBackground>	
				</View>
			
			);
	}
}

export default Index;