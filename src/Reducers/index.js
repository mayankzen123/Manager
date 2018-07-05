import {combineReducers} from "redux";
import AuthReducers from './AuthReducers'
import EmployeeFormReducer from "./EmployeeFormReducer";

export default combineReducers({
    auth: AuthReducers,
    employeeForm: EmployeeFormReducer
})