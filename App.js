import * as React  from 'react'
import {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation-tabs';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createBottonTabNavigator()
const BottomTabNavigator =()=>{
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused , color , size })=>{
        let iconName
        if(route.name === 'HomeScreen'){
           iconName = focused ? 'book' : 'book-outline'
        } else if(route.name === 'LoginScreen'){
          iconName=focused ? 'create' : 'create-outline'
        } 
        return <Ionicons name = {iconName} size = {size} color ={color}  />
      },  

    })}
    tabBarOptions = {{activeTintColor : 'tomato' , inactiveTintColor : 'grey'}}
    >
      <Tab.Screen name ='HomeScreen' component= {HomeScreen}  />
      <Tab.Screen name ='LoginScreen' component= {LoginScreen}  />

      </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
