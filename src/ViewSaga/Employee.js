import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetEmployeeRequest,DelEmployeeRequest } from '../Redux-saga/Action/EmployeeAction'
import EmployeeAdd from './EmployeeAdd'
import EmpionEdit from './EmployeeEdit'
import config from '../config/config'
import { IdentificationIcon,UserIcon,MailIcon,PhoneIcon,CalendarIcon,PhotographIcon,ViewListIcon,PencilAltIcon,TrashIcon } from '@heroicons/react/outline'

export default function EmployeeView() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const {employees} = useSelector(state => state.employeeStated)
    
    useEffect(() => {
        dispatch(GetEmployeeRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(DelEmployeeRequest(id))
    }
    const onClick = (empID) => {
        setDisplayEdit(true)
        setId(empID)
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    displayEdit
                        ?
                        <EmpionEdit
                            closeAdd={() => setDisplayEdit(false)}
                            onRefresh={() => setRefresh(true)}
                            id={id}
                            setDisplay={setDisplayEdit}
                        />
                        :
                        display ?
                            <EmployeeAdd
                                setDisplay={setDisplay}
                                closeAdd={() => setDisplay(false)}
                                onRefresh={() => setRefresh(true)}
                            />
                            :
                            <>
                                <button type="button" className="mb-8 cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}><svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg> Add Employee </button>
                                <table className="text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-9 py-3"><IdentificationIcon className='basis-1/4 h-6'/>Employee ID</th>
                                            <th scope="col" className="px-6 py-3"><UserIcon className='basis-1/4 h-6'/>Name</th>
                                            <th scope="col" className="px-6 py-3"><MailIcon className='basis-1/4 h-6'/>Email</th>
                                            <th scope="col" className="px-6 py-3"><PhoneIcon className='basis-1/4 h-6'/>Phone Number</th>
                                            <th scope="col" className="px-6 py-3"><CalendarIcon className='basis-1/4 h-6'/>Hire Date</th>
                                            <th scope="col" className="px-6 py-3"><PhotographIcon className='basis-1/4 h-6'/>Employee Profile</th>
                                            <th scope="col" className="px-6 py-3"><ViewListIcon className='basis-1/4 h-6'/>Setting</th>
                                        </tr>
                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            employees && employees.map(emp => {
                                                return (
                                                    <tr key={emp.employee_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{emp.employee_id}</td>
                                                        <td className="px-6 py-2">{emp.first_name} {emp.last_name}</td>
                                                        <td className="px-6 py-2">{emp.email}</td>
                                                        <td className="px-6 py-2">{emp.phone_number}</td>
                                                        <td className="px-6 py-2">{emp.hire_date}</td>
                                                        <td className="px-6 py-2"><img crossOrigin="anonymous" src={config.domain+'/employee/file/'+emp.emp_profile}/></td>
                                                        <td className="py-2 flex">
                                                                <div className="w-1/2">
                                                                    <button type="button" className="mx-2 mb-2 cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(emp.employee_id)}><PencilAltIcon className='basis-1/4 h-6'/>Edit</button>
                                                                </div>

                                                                <div className="w-1/2">
                                                                    <button type="button" className="mx-2 cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(emp.employee_id)}><TrashIcon className='basis-1/4 h-6'/>Delete</button>                                                                                                                       
                                                                </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                }
            </div>
        </div>
    )
}