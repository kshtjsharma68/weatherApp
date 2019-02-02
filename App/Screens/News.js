import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

const News = ({news , title}) => {
	return (
		<View style={{flex: 1}}>
			<FlatList 
				data={news}
				renderItem={({key, item}) => <Text key={key}>{key}.{item.content}</Text> }
			/>
		</View>
		);
}


News.proptypes = {
	news: PropTypes.array.isrequired
};

export default News;