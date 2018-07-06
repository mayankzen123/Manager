import React, {Component} from 'react'
import {
    StyleSheet,
    Text, TouchableOpacity,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class ListItem extends Component {
    render() {
        const {name} = this.props.employees;
        return (
            <TouchableOpacity
                onPress={() => {
                    Actions.employeeCreate({employees: this.props.employees});
                }}>
                <Text style={styles.text}>
                    {name.toUpperCase()}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        fontSize: 15,
        margin: 10,
        padding: 5,
        borderRadius: 2,
    }
});