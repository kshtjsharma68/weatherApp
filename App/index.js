import React, {Component} from 'react';
import { View, Button, ImageBackground } from 'react-native'; 
import WeatherIndex from './weatherIndex';
import HackerNews from './newsIndex';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			weather: false,
			news: false
		};
	}

	showWeather = () => {
		this.setState({ weather: !this.state.weather });
	}

	showNews = () => {
		this.setState({ news: !this.state.news });
	}

	render() {
		const { weather, news } = this.state; 
		return (
			
				<View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column'}}>
					<ImageBackground 
						source={{uri: 'https://cdn.thecustomdroid.com/wp-content/uploads/2018/02/Download-Redmi-Note-5-Wallpapers-Preview-8.jpg'}}
						style={{ width: '100%', height: '100%' }}
					>
					{
						weather ?
						<WeatherIndex />
						:
						 <Button 
							onPress={this.showWeather}
							title="Weather"
							color="green"
							style={{ 'width': 50 }}

						 />

					}

					{
						news ? 
						<HackerNews />
						:
						<Button 
							onPress={this.showNews}
							title="News"
							color="blue"
							style={{ 'width': 50 }}

						 />
					}
					</ImageBackground>	
				</View>
			
			);
	}
}

export default App;