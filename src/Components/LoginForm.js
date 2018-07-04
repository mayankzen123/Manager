import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, ActivityIndicator, TouchableOpacity} from "react-native";
import {emailChanged, loginUser, passwordChanged} from "../Action";
import {connect} from 'react-redux';

class LoginForm extends Component {
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
                        onChangeText={email => this.onEmailChange(email)}
                        value={this.props.email}
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
                        onChangeText={password => this.onPasswordChange(password)}
                        value={this.props.password}
                        multiline={false}
                    >
                    </TextInput>
                </View>
                {this.isLoading()}
                {this.displayError()}
                {this.displaySuccess()}
            </View>
        )
    }

    //Dispatching new text to reducer
    onEmailChange = (email) => {
        this.props.emailChanged(email)
    }

    onPasswordChange = (password) => {
        this.props.passwordChanged(password)
    }

    onLoginPressed = () => {
        const {email, password} = this.props
        this.props.loginUser({email, password})
    }

    isLoading = () => {
        if (this.props.loading) {
            return <ActivityIndicator size="large"/>
        } else {
            return (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.onLoginPressed()
                    }}>
                    <Text style={styles.label}>
                        Login
                    </Text>
                </TouchableOpacity>)
        }
    };
    displayError = () => {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'red'}}>
                    <Text style={{color: 'white', alignSelf: 'center', fontSize: 15}}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    displaySuccess = () => {
        if (this.props.user) {
            return (
                <View style={{backgroundColor: 'green'}}>
                    <Text style={{color: 'white', alignSelf: 'center', fontSize: 15}}>
                        Logged In Success!! {this.props.user.user.email}
                    </Text>
                </View>
            )
        }
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

//Mapping State to Props this props will be used wherever required
const mapStateToProps = (state) => {
    //Mapping state to Reducer and then to state name
    //Here AuthReducer and email state
    var auth = state.auth;
    return {
        email: auth.email,
        password: auth.password,
        error: auth.error,
        user: auth.user,
        loading: auth.loading
    }
};
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);