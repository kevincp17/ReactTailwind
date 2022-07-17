import React,{useState,useEffect} from 'react'
import jobApi from '../api/jobApi'
import JobAdd from './JobAdd'
import JobEdit from './JobEdit'

export default function JobView() {
    const [job,setJob] = useState([])
    const [display,setDisplay]=useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState({})
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

    const handleOnChange = name => event =>{
        setValues({...values, [name] : event.target.value})
    }

    const onEdit = async () => {
        const payload = {
            job_id: (id.jobID),
            job_title:(values.job_title),
            
        }
    
        await jobApi.update(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully Edit')
            })
    
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
        jobApi.deleted(id)
        .then(result=>{
            setRefresh(true)
            window.alert("Data Deleted Succesfully")
        })
    }

    const onClick = (jobID) => {
        setDisplayEdit(true)
        setId(jobID)
    }

  return (
    <div>
        <div>
                <h2>List Job</h2>
                <button onClick={()=> setDisplay(true)}> Add Job </button>
                {
                    displayEdit
                    ?
                    <JobEdit
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                    <JobAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleOnChange}
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
                                                <td>
                                                    <button onClick={()=> onDelete(jobs.job_id)}> Delete Job </button>
                                                    <button onClick={() => onClick({ jobID: jobs.job_id })}> Edit Job </button>
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