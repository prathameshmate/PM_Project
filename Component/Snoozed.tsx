import React from 'react';
import { View , Text } from 'react-native'

const Snoozed = () =>{
    return(
        <>
            <View style={{flex :1 , justifyContent : "center" , alignItems :"center"}}>
                <Text style = {{fontSize : 24 , fontWeight : "bold"}}>Snoozed Mails</Text>
            </View>
        </>
    );  
}
export default Snoozed;