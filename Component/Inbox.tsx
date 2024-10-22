import React from 'react';
import { View, Text, Button ,Alert } from 'react-native'
import { useNavigation ,useFocusEffect, useIsFocused} from "@react-navigation/native";


const Inbox = () => {

    const navigation = useNavigation();
    const navigateToDestination = () => {
        navigation.navigate("Draft", { name: "prathamesh" });
    }

    // useFocusEffect(
    //     React.useCallback(()=>{
    //     Alert.alert("enter");   // focus
    //     return() => Alert.alert("Exit")  // blur
    //     } ,[])
    // )

    // const isFocus  = useIsFocused();
    // if(isFocus){
    //     Alert.alert("screen is in focus");
    // }
    // else{
    //     Alert.alert("screen isn't focus")
    // }

    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Inbox Mails</Text>
                <Button title='draft' onPress={() => { navigateToDestination() }} />
            </View>
        </>
    );
}
export default Inbox;