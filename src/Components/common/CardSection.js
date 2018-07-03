import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.ContainerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    ContainerStyle: {
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#ddd'
    }
};

export {CardSection};