import React from 'react'

export default function DependentAdd(props){
  return (
    <div>
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Dependent ID: </label>
                <input type="text" placeHolder="Dependent ID" 
                onChange = {props.handleOnChange('dependent_id')}/>
            </div>

            <div>
                <label>First  Name: </label>
                <input type="text" placeHolder="First Name" 
                onChange = {props.handleOnChange('first_name')}/>
            </div>

            <div>
                <label>Last  Name: </label>
                <input type="text" placeHolder="Last Name" 
                onChange = {props.handleOnChange('last_name')}/>
            </div>

            <div>
                <label>Relationship: </label>
                <input type="text" placeHolder="Relationship" 
                onChange = {props.handleOnChange('relationship')}/>
            </div>

            <div>
                <label>Employee ID : </label>
                <input type="text" placeHolder="Employee ID" 
                onChange = {props.handleOnChange('employee_id')}/>
            </div>
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}


