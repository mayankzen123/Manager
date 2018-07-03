import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableOpacity} from "react-native";

class LoginForm extends Component {
    constructor() {
        super();
        this.setState({
            email: "",
            password: ""
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.text}
                        underlineColorAndroid="transparent"
                        returnKeyType={"next"}
                        keyboardType={"email-address"}
                        autoCapitalize='none'
                        placeholder="Enter email"
                        onChangeText={email => this.emailChanged(email)}
                        multiline={false}
                    >
                    </TextInput>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>
                        Password
                    </Text>
                    <TextInput
                        style={styles.text}
                        underlineColorAndroid="transparent"
                        returnKeyType={"next"}
                        keyboardType='ascii-capable'
                        autoCapitalize='none'
                        placeholder="Enter password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        multiline={false}
                    >
                    </TextInput>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log(this.props);
                    }}>
                    <Text style={styles.label}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    emailChanged = (email) => {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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

export default LoginForm;