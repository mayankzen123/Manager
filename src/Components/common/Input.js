import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({label, value, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={style.InputStyle}/>
        </View>
    );
};
const style = {
    InputStyle: {
        height: 50,
        width: 350
    }
}
export {Input};
