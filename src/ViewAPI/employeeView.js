import React,{useState,useEffect} from 'react'
import employeeApi from '../api/employeeApi'

export default function EmployeeView() {
 const [employee,setEmployee] = useState([])

    useEffect(() => {
        employeeApi.list().then(data => {
            setEmployee(data)
        })
    },[])

  return (
    <div>
        <div>
                <h2>List Employee</h2>
                
                {
                        <>
                            <table>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Hire Date</th>
                                <th>Salary</th>
                                <th>Manager ID</th>
                                <tbody>
                                    {
                                        employee&&employee.map( emp => (
                                            <tr key={emp.employee_id}>
                                                <td>{emp.employee_id}</td>
                                                <td>{emp.first_name}</td>
                                                <td>{emp.last_name}</td>
                                                <td>{emp.email}</td>
                                                <td>{emp.phone_number}</td>
                                                <td>{emp.hire_date}</td>
                                                <td>{emp.salary}</td>
                                                <td>{emp.manager_id}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
    </div>
  )
}