import React from 'react'

export default function DepartmentAdd(props){
  return (
    <div>
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Department ID: </label>
                <input type="text" placeHolder="Department ID" 
                onChange = {props.handleOnChange('department_id')}/>
            </div>

            <div>
                <label>Department Name : </label>
                <input type="text" placeHolder="Department Name" 
                onChange = {props.handleOnChange('department_name')}/>
            </div>

            <div>
                <label>Location ID : </label>
                <input type="text" placeHolder="Location ID" 
                onChange = {props.handleOnChange('location_id')}/>
            </div>
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}


