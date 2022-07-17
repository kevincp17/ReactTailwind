import {call,put} from 'redux-saga/effects'
import apiEmployee from '../../api/employeeApi'
import { GetEmployeeSuccess,GetEmployeeFailed,AddEmployeeSuccess,AddEmployeeFailed,DelEmployeeSuccess,DelEmployeeFailed,UpdateEmployeeSuccess,UpdateEmployeeFailed } from '../Action/EmployeeAction'

function* handleGetEmployee(){
    try {
        const result = yield call(apiEmployee.list)
        yield put(GetEmployeeSuccess(result))
    } catch (error) {
        yield put(GetEmployeeFailed(error))
    }
}

function* handleDelEmployee(action){
    const{payload} = action
    try {
        const result = yield call(apiEmployee.deleted,payload)
        yield put(DelEmployeeSuccess(result))
    } catch (error) {
        yield put(DelEmployeeFailed(error))
    }
}

function* handleAddEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.create,payload)
        yield put(AddEmployeeSuccess(result.data))
    } catch (error) {
        yield put(AddEmployeeFailed(error))
    }
}

function* handleUpdateEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.update,payload)
        yield put(UpdateEmployeeSuccess(result.data))
    } catch (error) {
        yield put(UpdateEmployeeFailed(error))
    }
}

export {
    handleGetEmployee,
    handleDelEmployee,
    handleAddEmployee,
    handleUpdateEmployee
}