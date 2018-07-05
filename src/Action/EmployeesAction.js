import {EMPLOYEE_UPDATE} from "./ActionTypes";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};