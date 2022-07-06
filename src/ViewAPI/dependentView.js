import React,{useState,useEffect} from 'react'
import dependentApi from '../api/dependentApi'

export default function DependentView() {
 const [dependent,setDependent] = useState([])

    useEffect(() => {
        dependentApi.list().then(data => {
            setDependent(data)
        })
    },[])

  return (
    <div>
        <div>
                <h2>List Dependent</h2>
                
                {
                        <>
                            <table>
                                <th>Dependent ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Relationship</th>
                                <tbody>
                                    {
                                        dependent&&dependent.map( dep => (
                                            <tr key={dep.dependent_id}>
                                                <td>{dep.dependent_id}</td>
                                                <td>{dep.first_name}</td>
                                                <td>{dep.last_name}</td>
                                                <td>{dep.relationship}</td>
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