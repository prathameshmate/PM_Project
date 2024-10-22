import React from 'react';
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"


const Home = (props: any) => {
    console.warn(props.route.params)

    const { name, age, gender } = props.route.params; // obj destructure

    const navigation = useNavigation();

    const navigateToDestinationScreen = () => {
        navigation.navigate("Login");
    }

    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home Screen</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Name : {name}</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Age : {age}</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gender : {gender}</Text>

                <Button title='Login Screen' onPress={() => { navigateToDestinationScreen() }} />
            </View>
        </>
    );
}
export default Home;