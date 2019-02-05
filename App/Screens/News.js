import React, { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

class News extends Component {

	constructor(props) {
		super(props);
	}

	_keyExtractor = (item, index) => item.url;

	_renderItem = (item, key) => {
		return(
			<View style={{borderTopColor: 'black', borderTopWidth: 1, padding: 5 }}>
				<View style={{flex: 1, flexDirection: 'row', alignItems:'stretch', justifyContent: 'space-evenly'}}>
					<Image source={{uri: item.urlToImage}} style={{width: 50, height: 50}} />
					<Text>{item.publishedAt}</Text>
				</View>
				<View style={{flex: 1, alignItems: 'center'}}>
				  <Text title={item.author} key={key} >{item.title}</Text>
				</View>	
			</View>  		
			);
	}

	render() {
		const {news , title} = this.props;

		return (
			<View style={{flex: 1}}>
				<FlatList 
					data={news}
					keyExtractor={this._keyExtractor}
					renderItem={({key, item}) => this._renderItem(item, key) }
				/>
			</View>
			);
	}
}

News.proptypes = {
	news: PropTypes.array.isrequired
};

export default News;