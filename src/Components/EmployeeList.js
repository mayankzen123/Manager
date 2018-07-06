import React, {Component} from 'react';
import {Text, StyleSheet, View, ListView} from "react-native";
import {connect} from 'react-redux';
import {employeeFetch} from "../Action";
import _ from 'lodash';
import ListItem from "./ListItem";

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow = (employees) => {
        return (<ListItem employees={employees}/>)
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={(rowData) => (this.renderRow(rowData))}/>
        )
    }
}

//Mapping State to Props this props will be used wherever required
const mapStateToProps = (state) => {
    //Mapping state to Reducer and then to state name
    const employees = _.map(state.employeeList, (val, uid) => {
        return {...val, uid}
    });
    return {employees}
};
export default connect(mapStateToProps, {employeeFetch})(EmployeeList);