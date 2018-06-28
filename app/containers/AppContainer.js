import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  StatusBar,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation';

var Login = require('../components/Login');


import Ionicons from 'react-native-vector-icons/Ionicons';


StatusBar.setBarStyle('light-content', true)

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FILTERS = [{
	tag : "Filter",
	"active" : false
}]

const FIELDS =[{
	title : "Tokyoo",
	subtitle :"Shinjuku",
	tags : ["eats"],
	active : true,
}]

const HomeScreen = ({ navigation }) => (
	<ScrollView>
		<View style={styles.card}>
			<Text style={styles.textLarge}
		</View>
	</ScrollView>
)

const styles = StyleSheet.create({
	section : {
		borderWidth : 1,
		borderColor : '#656565',
		margin : 5,
	},
	container :{
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#F5FCFF',
	},
	welcome :{
		fontSize : 20,
		textAlign : 'center',
		margin : 10,
	},
	instruction : {
		textAlign : 'center',
		color : '#333333',
		marginBottom : 5,
	},
	description : {
		marginBottom : 20,
		fontSize : 18,
		textAlign : 'center',
		color : '#656565',
	},
	container : {
		flex : 0,
		backgroundColor : '#374046',
	},
	flowRight :{
		flexDirection : 'row',
		alignItems : 'center',
		alignSelf : 'stretch',
	},
	buttonText :{
		fontSize : 18,
		color : 'white',
		alignSelf : 'center'
	},
	button :{
		height : 36,
		flex : 1,
		flexDirection : 'row',
		backgroundColor : '#48BBEC',
		borderColor : '#48BBEC',
		borderWidth : 1,
		borderRadius : 8,
		marginBottom : 50,
		alignSelf : 'stretch',
		justifyContent : 'center'
	},
})