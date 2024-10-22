    import React from 'react';
    import { View , Text } from 'react-native';
    import {useRoute} from "@react-navigation/native";

    const Draft = () =>{
        // console.warn(props.route.params)
        const route = useRoute();
        const {name}  = route.params;

        return(
            <>
                <View style={{flex :1 , justifyContent : "center" , alignItems :"center"}}>
                    <Text style = {{fontSize : 24 , fontWeight : "bold"}}>Draft Mails  : {name} </Text>
                </View>
            </>
        );  
    }
    export default Draft;