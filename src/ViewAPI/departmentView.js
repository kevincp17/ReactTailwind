import React,{useState,useEffect} from 'react'
import departmentApi from '../api/departmentApi'

export default function DepartmentView() {
 const [department,setDepartment] = useState([])

    useEffect(() => {
        departmentApi.list().then(data => {
            setDepartment(data)
        })
    },[])

  return (
    <div>
        <div>
                <h2>List Department</h2>
                
                {
                        <>
                            <table>
                                <th>Department ID</th>
                                <th>Department Name</th>
                                <tbody>
                                    {
                                        department&&department.map( dep => (
                                            <tr key={dep.department_id}>
                                                <td>{dep.department_id}</td>
                                                <td>{dep.department_name}</td>
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