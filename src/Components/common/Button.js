import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
            <Text style={styles.textStyles}>{children}</Text>
        </TouchableOpacity>
    );
};


const styles = {
    ButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff'
    }, textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold'
    }
};

export {Button};
