import {combineReducers} from "redux";
import AuthReducers from './AuthReducers'
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeListReducer from "./EmployeeListReducer";

export default combineReducers({
    auth: AuthReducers,
    employeeForm: EmployeeFormReducer,
    employeeList: EmployeeListReducer
})