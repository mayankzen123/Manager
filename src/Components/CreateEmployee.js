import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import {employeeUpdate} from "../Action";
import {connect} from 'react-redux';

class CreateEmployee extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>
                        Name
                    </Text>
                    <TextInput
                        style={styles.text}
                        underlineColorAndroid="transparent"
                        returnKeyType={"next"}
                        autoCapitalize='none'
                        placeholder="Enter name"
                        onChangeText={name => this.onNameChanged(name)}
                        value={this.props.name}
                        multiline={false}
                    >
                    </TextInput>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>
                        Mobile No.
                    </Text>
                    <TextInput
                        style={styles.text}
                        underlineColorAndroid="transparent"
                        returnKeyType={"next"}
                        keyboardType='numeric'
                        autoCapitalize='none'
                        placeholder="Enter mobile number"
                        onChangeText={phone => this.onMobileNoChanged(phone)}
                        value={this.props.phone}
                        multiline={false}
                    >
                    </TextInput>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        alert("Create Button Pressed")
                    }}>
                    <Text style={styles.label}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    onNameChanged = (name) => {
        this.props.employeeUpdate({prop: 'name', value: name})
    };

    onMobileNoChanged = (phone) => {
        this.props.employeeUpdate({prop: 'phone', value: phone})
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, textContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    }, label: {
        fontSize: 15,
        fontWeight: 'bold'
    }, text: {
        borderWidth: 1,
        fontSize: 15,
        borderRadius: 2,
    }, button: {
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10,
        borderRadius: 2,
        alignSelf: 'center',
        borderWidth: 1
    }
});
//Mapping State to Props this props will be used wherever required
const mapStateToProps = (state) => {
    //Mapping state to Reducer and then to state name
    //Here AuthReducer and email state
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};
export default connect(mapStateToProps, {employeeUpdate})(CreateEmployee);