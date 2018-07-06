import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity, Picker, ActivityIndicator} from "react-native";
import {
    employeeCreate,
    employeeRemove,
    employeeReset,
    employeeUpdate,
    resetEmployee,
    saveEmployeeUpdate
} from "../Action";
import {connect} from 'react-redux';
import {YellowBox} from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

class CreateEmployee extends Component {
    componentWillMount() {
        if (this.props.employees !== undefined) {
            const {name, phone, shift, uid} = this.props.employees;
            this.onNameChanged(name);
            this.onMobileNoChanged(phone);
            this.onPickerSelected(shift);
            this.setUid(uid)
        } else {
            this.props.employeeReset();
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.childContainer}>
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
                <View style={styles.childContainer}>
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
                <View style={styles.childContainer}>
                    <Text style={styles.label}>
                        Shift
                    </Text>
                    <View style={styles.pickerStyle}>
                        <Picker
                            selectedValue={this.props.shift}
                            onValueChange={(day) => this.onPickerSelected(day)}>
                            <Picker.Item label="Monday" value="Monday"/>
                            <Picker.Item label="Tuesday" value="Tuesday"/>
                            <Picker.Item label="Wednesday" value="Wednesday"/>
                            <Picker.Item label="Thrusday" value="Thrusday"/>
                            <Picker.Item label="Friday" value="Friday"/>
                            <Picker.Item label="Saturday" value="Saturday"/>
                            <Picker.Item label="Sunday" value="Sunday"/>
                        </Picker>
                    </View>
                </View>
                {this.isLoading()}
            </View>
        )
    }

    onNameChanged = (name) => {
        this.props.employeeUpdate({prop: 'name', value: name})
    };

    onMobileNoChanged = (phone) => {
        this.props.employeeUpdate({prop: 'phone', value: phone})
    };

    onPickerSelected = (day) => {
        this.props.employeeUpdate({prop: 'shift', value: day})
    };

    onCreatePressed = () => {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
    };

    isLoading = () => {
        if (this.props.loading) {
            return <ActivityIndicator size="large"/>
        } else if (this.props.employees !== undefined) {
            return (
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.onUpdatePressed();
                        }}>
                        <Text style={styles.label}>
                            Update
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.onRemovePressed();
                        }}>
                        <Text style={styles.label}>
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.onCreatePressed();
                    }}>
                    <Text style={styles.label}>
                        Create
                    </Text>
                </TouchableOpacity>
            )
        }
    };

    onUpdatePressed = () => {
        const {name, phone, shift, empid} = this.props;
        this.props.saveEmployeeUpdate(name, phone, shift, empid)
    };

    onRemovePressed = () => {
        const {empid} = this.props
        this.props.employeeRemove(empid)
    };

    setUid = (uid) => {
        this.props.employeeUpdate({prop: 'empid', value: uid})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    }, childContainer: {
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
    }, pickerStyle: {
        borderWidth: 1,
        borderRadius: 2,
    }
});
//Mapping State to Props this props will be used wherever required
const mapStateToProps = (state) => {
    //Mapping state to Reducer and then to state name
    const {name, phone, shift, loading, empid} = state.employeeForm;
    return {name, phone, shift, loading, empid};
};
export default connect(mapStateToProps, {
    employeeUpdate,
    saveEmployeeUpdate,
    employeeCreate,
    employeeReset,
    employeeRemove
})(CreateEmployee);