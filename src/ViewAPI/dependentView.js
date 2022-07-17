import React,{useState,useEffect} from 'react'
import dependentApi from '../api/dependentApi'
import DependentAdd from './DependentAdd'
import DependentEdit from './DependentEdit'

export default function DependentView() {
    const [dependent,setDependent] = useState([])
    const [display,setDisplay]=useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState({})
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

    const handleOnChange = name => event =>{
        setValues({...values, [name] : event.target.value})
    }

    const onEdit = async () => {
        const payload = {
            dependent_id: (id.depID),
            first_name: (values.first_name),
            
        }
    
        await dependentApi.update(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully Edit')
            })
    
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
        dependentApi.deleted(id)
        .then(result=>{
            setRefresh(true)
            window.alert("Data Deleted Succesfully")
        })
    }

    const onClick = (depID) => {
        setDisplayEdit(true)
        setId(depID)
    }
  return (
    <div>
        <div>
                <h2>List Dependent</h2>
                <button onClick={()=> setDisplay(true)}> Add Dependent </button>
                {
                    displayEdit
                    ?
                    <DependentEdit
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                    <DependentAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleOnChange}
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
                                                <td>
                                                    <button onClick={()=> onDelete(dep.dependent_id)}> Delete Dependent </button>
                                                    <button onClick={() => onClick({ depID: dep.dependent_id })}> Edit Dependent </button>
                                                </td>
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