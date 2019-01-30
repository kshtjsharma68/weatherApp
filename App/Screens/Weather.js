import React, { Component } from 'react';
import { View, Text, ProgressBarAndroid, StyleSheet, Animated } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { weatherCondition } from '../config/weatherCondition';

const Weather = ({ weather, temperature }) => {
	return (
			<View style={[
				styles.container, {backgroundColor: weatherCondition[weather].color}
				]}>
				<View style={styles.headerContainer}>
					<MaterialCommunityIcons size={50} name={weatherCondition[weather].icon} color={'#fff'} />
        			<Text style={styles.tempText}>{temperature}˚</Text>
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.title}>{weatherCondition[weather].title}</Text>
        			<Text style={styles.subtitle}>{weatherCondition[weather].subtitle}</Text>
				</View>
			</View>
		);
}

Weather.propTypes = {
	temperature: PropTypes.number.isRequired,
	weather: PropTypes.string
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#f7b733'
	},
	headerContainer: {
		 flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center'
	}, 
	tempText: {
	    fontSize: 48,
	    color: '#fff'
	 },
	bodyContainer: {
	    flex: 2,
	    alignItems: 'flex-start',
	    justifyContent: 'flex-end',
	    paddingLeft: 25,
	    marginBottom: 40
	  },
	  title: {
	    fontSize: 48,
	    color: '#fff'
	  },
	  subtitle: {
	    fontSize: 24,
	    color: '#fff'
	  }
});

export default Weather;