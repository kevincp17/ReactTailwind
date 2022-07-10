import React,{useState,useEffect} from 'react'
import dependentApi from '../api/dependentApi'
import DependentAdd from './DependentAdd'

export default function DependentView() {
    const [dependent,setDependent] = useState([])
    const [display,setDisplay]=useState(false)
    const [refresh,setRefresh]=useState(false)
    const [values,setValues]=useState({
            dependent_id: 0,
            first_name: "",
            last_name: "",
            relationship: "",
            employee_id: 0
    })

    useEffect(() => {
        dependentApi.list().then(data => {
            setDependent(data)
        })
        setRefresh(false)
    },[refresh])

    const handleChange = name => event =>{
        setValues({...values, [name] : event.target.value})
    }

    const onSubmit = async() =>{
        const payload={
            dependent_id: (parseInt(values.dependent_id)),
            first_name: (values.first_name),
            last_name: (values.last_name),
            relationship: (values.relationship),
            employee_id: (parseInt(values.employee_id))
        }
        await dependentApi.create(payload)
        .then(()=>{
            setRefresh(true)
            window.alert("Data Added Succesfully")
        })
        setDisplay(false)
    }

    const onDelete= async(id) =>{
        dependentApi.deletes(id)
        .then(result=>{
            setRefresh(true)
            window.alert("Data Deleted Succesfully")
        })
    }
  return (
    <div>
        <div>
                <h2>List Dependent</h2>
                <button onClick={()=> setDisplay(true)}> Add Dependent </button>
                {
                    display ?
                    <DependentAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleChange}
                    setDisplay = {setDisplay}
                />
                :
                        <>
                            <table>
                                <th>Dependent ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Relationship</th>
                                <th>Action</th>
                                <tbody>
                                    {
                                        dependent&&dependent.map( dep => (
                                            <tr key={dep.dependent_id}>
                                                <td>{dep.dependent_id}</td>
                                                <td>{dep.first_name}</td>
                                                <td>{dep.last_name}</td>
                                                <td>{dep.relationship}</td>
                                                <td><button onClick={()=> onDelete(dep.dependent_id)}> Delete Job </button></td>
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