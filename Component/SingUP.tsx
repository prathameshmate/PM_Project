import React from 'react'
import { View, Text } from 'react-native'
const SingUP = (props : any) => {
    // console.warn(props.route.params);
    const name = props.route.params;
    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>SingUP : {name}</Text>
        </View>

    );
}

export default SingUP;