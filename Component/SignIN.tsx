import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SignIN = () => {

    const navigation = useNavigation();

    const navigateToDestination = () => {
        navigation.navigate("Profile" , "prathamesh");
    }

    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>SignIN</Text>
            <Button title='Profile' onPress={() => { navigateToDestination() }} />
        </View>

    );
}

export default SignIN;