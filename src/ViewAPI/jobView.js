import React,{useState,useEffect} from 'react'
import jobApi from '../api/jobApi'

export default function JobView() {
 const [job,setJob] = useState([])

    useEffect(() => {
        jobApi.list().then(data => {
            setJob(data)
        })
    },[])

  return (
    <div>
        <div>
                <h2>List Job</h2>
                
                {
                        <>
                            <table>
                                <th>Job ID</th>
                                <th>Job Title</th>
                                <th>Min Salary</th>
                                <th>Max Salary</th>
                                <tbody>
                                    {
                                        job&&job.map( jobs => (
                                            <tr key={jobs.job_id}>
                                                <td>{jobs.job_id}</td>
                                                <td>{jobs.job_title}</td>
                                                <td>{jobs.min_salary}</td>
                                                <td>{jobs.max_salary}</td>
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