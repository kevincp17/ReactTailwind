import React,{useState,useEffect} from 'react'
import departmentApi from '../api/departmentApi'
import DepartmentAdd from './DepartmentAdd'
import DepartmentEdit from './DepartmentEdit'

export default function DepartmentView() {
    const [department,setDepartment] = useState([])
    const [display,setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh,setRefresh]=useState(false)
    const [id, setId] = useState({})
    const [values,setValues] = useState ({
        department_id : 0,
        department_name : '',
        location_id:0
    }) 

    useEffect(() => {
        departmentApi.list().then(data => {
            setDepartment(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onEdit = async () => {
        const payload = {
            department_id:(id.depID),
            department_name : (values.department_name),
        }
    
        await departmentApi.update(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully Edit')
            })
    
    }

    const onSubmit = async() => {
        const payload = {
            department_id:(parseInt(values.department_id)),
            department_name : (values.department_name),
            location_id : (parseInt(values.location_id)),
        }
        
        await departmentApi.create(payload)
        .then(()=>{
            setDisplay(false) 
            setRefresh(true)
           window.alert('Data Successfully Insert')
        })
      
    }
    const onDelete = async(id) => {
        departmentApi.deleted(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Delete')
        })
    }

    const onClick = (depID) => {
        setDisplayEdit(true)
        setId(depID)
    }

  return (
    <div>
        <div>
                <h2>List Department</h2>
                <button onClick={()=> setDisplay(true)}> Add Department </button>
                {
                    displayEdit
                    ?
                    <DepartmentEdit
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                    <DepartmentAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                />
                :
                        <>
                            <table>
                                <th>Department ID</th>
                                <th>Department Name</th>
                                <th>Action</th>
                                <tbody>
                                    {
                                        department&&department.map( dep => (
                                            <tr key={dep.department_id}>
                                                <td>{dep.department_id}</td>
                                                <td>{dep.department_name}</td>
                                                <td>
                                                    <button onClick={()=> onDelete(dep.department_id)}> Delete Department </button>
                                                    <button onClick={() => onClick({ depID: dep.department_id })}> Edit Department </button>
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