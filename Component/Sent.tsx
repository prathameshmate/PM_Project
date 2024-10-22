import React from 'react';
import { View , Text } from 'react-native'

const Sent = () =>{
    return(
        <>
            <View style={{flex :1 , justifyContent : "center" , alignItems :"center"}}>
                <Text style = {{fontSize : 24 , fontWeight : "bold"}}>Sent Mails</Text>
            </View>
        </> 
    );  
}
export default Sent;