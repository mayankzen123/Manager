import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.ContainerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    ContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        height:50,
        shadowRadius: 0.1,
        shadowOpacity: 0.2,
        elevation: 3,
        margin: 8,
        padding: 5
    }
};

export {Card};
