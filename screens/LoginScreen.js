import * as React  from 'react'
import {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , BottomTabNavigator } from 'react-native';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1 , alignItems:'center', justifyContent:'center'}} >
                <Text>Login Screen </Text>
                </View>
        )
    }
}