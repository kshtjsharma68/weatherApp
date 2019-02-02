import React, {Component} from 'react';
import { StyleSheet, View, Text, ProgressBarAndroid, Button } from 'react-native';
import News from './Screens/News';
import links from './config/newsLinks';



class NewsIndex extends Component {

	static navigationOption = {
		title: 'News'
	};

	constructor(props) {
		super(props);
		this.state ={
			isLoading: true,
			news: 0,
			title: 'Nothing in news',
			error: ''
		};
	}

	componentWillMount() {
		// this.fetchNews();
	}	

	fetchNews( url ){
		fetch(
				`${url}`
			)
		.then(res => res.json())
		.then(res => {console.log(res)
			if ( res.status == "error" ) {
					this.setState({
						isLoading: true,
						error: res.message
					});
			} else {
					this.setState({
						isLoading: false,
						news: res.articles
					});	
			}			
		})
		.catch(err => {
			this.setState({
				error: String(err)
			})
		});
	}

	render() {
		const { isLoading, news, title, error } = this.state;

		return (
				<View style={styles.container}>
				{ Object.keys(links).map((v, k) => {
					return <Button title={v} key={k} onPress={() => this.fetchNews(links[v])} color="red"/>
					}) 
				}
				{isLoading ? 
					<View>
						<ProgressBarAndroid />
						<Text>{error}</Text>
					</View>	
					
					 : 
					<News news={news} title={title}/>
					 }
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

export default NewsIndex;