import React,{useState,useEffect} from 'react'
import departmentApi from '../api/departmentApi'

export default function DepartmentAdd(props){
    const [department, setDepartment] = useState([])

    useEffect(() => {
        departmentApi.findOne(props.id.depID).then(data => {
            setDepartment(data)
        })
    },[])
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Department ID: </label>
                <input type="text" defaultValue={department.department_id}
                onChange = {props.handleOnChange('department_id')}/>
            </div>

            <div>
                <label>Department Name : </label>
                <input type="text" placeHolder={department.department_name}
                onChange = {props.handleOnChange('department_name')}/>
            </div>

            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}


