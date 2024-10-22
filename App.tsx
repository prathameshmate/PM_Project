import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from "react-native-vector-icons/AntDesign"
import Icon1 from "react-native-vector-icons/Feather"

//component
import Splash from './src/Screen/Splash'
import Login from './src/Screen/Login';
import SingUp from './src/Screen/SignUp';
import Home from "./src/Bottom_Screens/Home";
import Profile from "./src/Bottom_Screens/Profile";
import Cart from './src/Bottom_Screens/Cart';
import Wishlist from './src/Bottom_Screens/Wishlist';
import Setting from './src/Bottom_Screens/Setting/Setting';
import MyAddress from './src/Bottom_Screens/Setting/MyAddress';
import NewAddress from './src/Bottom_Screens/Setting/NewAddress';

// redux
import { useSelector } from 'react-redux';

// var len: any;
// Create the Tab Navigator
const Tab = createBottomTabNavigator();


const MainHome = (props: any) => {
  //useSelector of redux for printing how much item present in cart
  const myState = useSelector((state) => state.cart)
  const len = myState.length

  const [fullName, updateFullName] = useState()
  const { fullname } = props.route.params;

  useEffect(() => {
    updateFullName(fullname);
  })

  console.log('================object in Home====================');
  console.log(props.route.params);
  console.log('====================================');


  const navigation = useNavigation();
  const navigateToDestinationScreen = () => {
    navigation.navigate("Setting")
  }
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarShowLabel: false, // off the tab bar labels
        tabBarIconStyle: {
          width: 50
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#A4DBD9",
      }}
    >
      <Tab.Screen
        name='Home'
        options={{
          headerTitle: "ShoppingApp",
          // headerTitleAlign: "center",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22
          },
          headerRight: () => {
            return (
              <View><Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>Hii {fullName}</Text></View>
            );
          },
          headerRightContainerStyle: {
            // backgroundColor: "red",
            alignItems: "center",
          },
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name="home" size={30} color={color} />
            );
          },

        }}
        component={Home} />
      <Tab.Screen
        name='Profile'
        initialParams={props.route.params}
        options={{
          headerTitle: "Profile",
          // headerTitleAlign: "center",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22
          },
          headerRight: () => {
            return (
              <TouchableOpacity style={{ width: "30%", alignItems: "center" }} onPress={navigateToDestinationScreen}><Icon1 name='settings' size={30} color="#000" /></TouchableOpacity>
            );
          },

          tabBarIcon: ({ color, size }) => {
            return (
              <Icon1 name="user" size={30} color={color} />
            );
          },
        }}
        component={Profile} />
      <Tab.Screen
        name='Wishlist'
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name="heart" size={30} color={color} />
            )
          },
          tabBarBadgeStyle: {
            backgroundColor: "red",
            elevation: 5,
            fontWeight: "bold"
          }

        }}
        component={Wishlist} />
      <Tab.Screen
        name='Cart'
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name="shoppingcart" size={35} color={color} />
            )
          },
          tabBarBadge: len,
          tabBarBadgeStyle: {
            backgroundColor: "red",
            elevation: 5,
            fontWeight: "bold"
          }

        }}
        component={Cart} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' options={{ headerShown: false }} component={Splash} />
          <Stack.Screen name='Login' component={Login}
            options={{ title: " Login" }} />
          <Stack.Screen name='Create/UpdateAccount' options={{headerTitle :"Create/Update Account"}} component={SingUp} />
          <Stack.Screen name='MainHome' options={{ headerShown: false }} component={MainHome} />

          {/* setting screen is present inside the  profile(tab screen) */}
          <Stack.Screen name='Setting' component={Setting} />
          <Stack.Screen name='MyAddresses' options={{headerTitle :"My Addresses"}} component={MyAddress} />
          <Stack.Screen name='NewAddress' options={{headerShown:false}} component={NewAddress} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;