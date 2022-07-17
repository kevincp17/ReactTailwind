import React,{useEffect,useState} from 'react'
import jobApi from '../api/jobApi'

export default function JobAdd(props) {
    const [job, setJob] = useState([])

    useEffect(() => {
        jobApi.findOne(props.id.jobID).then(data => {
            setJob(data)
        })
    },[])
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Job ID: </label>
                <input type="text" defaultValue={job.job_id}
                onChange = {props.handleOnChange('job_id')}/>
            </div>

            <div>
                <label>Job Title: </label>
                <input type="text" placeHolder={job.job_title}
                onChange = {props.handleOnChange('job_title')}/>
            </div>

            {/* <div>
                <label>Min Salary: </label>
                <input type="text" placeHolder="Min Salary" 
                onChange = {props.handleOnChange('min_salary')}/>
            </div>

            <div>
                <label>Max Salary: </label>
                <input type="text" placeHolder="Max Salary" 
                onChange = {props.handleOnChange('max_salary')}/>
            </div> */}
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}