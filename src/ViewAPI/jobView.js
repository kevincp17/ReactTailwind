import React,{useState,useEffect} from 'react'
import jobApi from '../api/jobApi'
import JobAdd from './JobAdd'

export default function JobView() {
    const [job,setJob] = useState([])
    const [display,setDisplay]=useState(false)
    const [refresh,setRefresh]=useState(false)
    const [values,setValues]=useState({
        job_id: 0,
        job_title:"",
        min_salary:0,
        max_salary:0
    })

    useEffect(() => {
        jobApi.list().then(data => {
            setJob(data)
        })
        setRefresh(false)
    },[refresh])

    const handleChange = name => event =>{
        setValues({...values, [name] : event.target.value})
    }

    const onSubmit = async() =>{
        const payload={
            job_id: (parseInt(values.job_id)),
            job_title:(values.job_title),
            min_salary:(parseInt(values.min_salary)),
            max_salary:(parseInt(values.max_salary))
        }
        await jobApi.create(payload)
        .then(()=>{
            setRefresh(true)
            window.alert("Data Added Succesfully")
        })
        setDisplay(false)
    }

    const onDelete= async(id) =>{
        jobApi.deletes(id)
        .then(result=>{
            setRefresh(true)
            window.alert("Data Deleted Succesfully")
        })
    }

  return (
    <div>
        <div>
                <h2>List Job</h2>
                <button onClick={()=> setDisplay(true)}> Add Job </button>
                {
                    display ?
                    <JobAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleChange}
                    setDisplay = {setDisplay}
                />
                :
                        <>
                            <table>
                                <th>Job ID</th>
                                <th>Job Title</th>
                                <th>Min Salary</th>
                                <th>Max Salary</th>
                                <th>Action</th>
                                <tbody>
                                    {
                                        job&&job.map( jobs => (
                                            <tr key={jobs.job_id}>
                                                <td>{jobs.job_id}</td>
                                                <td>{jobs.job_title}</td>
                                                <td>{jobs.min_salary}</td>
                                                <td>{jobs.max_salary}</td>
                                                <td><button onClick={()=> onDelete(jobs.job_id)}> Delete Job </button></td>
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