import React from 'react'

export default function JobAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Job ID: </label>
                <input type="text" placeHolder="Job ID" 
                onChange = {props.handleOnChange('job_id')}/>
            </div>

            <div>
                <label>Job Title: </label>
                <input type="text" placeHolder="Job Title" 
                onChange = {props.handleOnChange('job_title')}/>
            </div>

            <div>
                <label>Min Salary: </label>
                <input type="text" placeHolder="Min Salary" 
                onChange = {props.handleOnChange('min_salary')}/>
            </div>

            <div>
                <label>Max Salary: </label>
                <input type="text" placeHolder="Max Salary" 
                onChange = {props.handleOnChange('max_salary')}/>
            </div>
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}