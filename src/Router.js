import React from 'react'
import {Router, Scene, Stack, Actions} from "react-native-router-flux";
import LoginForm from "./Components/LoginForm";
import EmployeeList from "./Components/EmployeeList";
import CreateEmployee from "./Components/CreateEmployee";

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Stack key="auth">
                    <Scene key="login" component={LoginForm} title="Please login" initial/>
                </Stack>
                <Stack key="main">
                    <Scene
                        initial
                        rightButtonStyle={{right: 0}}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employee"
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"/>
                    <Scene
                        key="employeeCreate"
                        component={CreateEmployee}
                        title="Create Employee"
                    />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;