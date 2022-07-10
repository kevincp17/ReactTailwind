import React,{useState,useEffect} from 'react'
import regionApi from '../api/regionApi'
import RegionAdd from './RegionAdd'

export default function RegionView() {
    const [region,setRegion] = useState([])
    const [display,setDisplay]=useState(false)
    const [refresh,setRefresh]=useState(false)
    const [values,setValues]=useState({
        region_id:undefined,
        region_name:undefined
    })

    useEffect(() => {
        regionApi.list().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    },[refresh])

    const handleChange = name => event =>{
        setValues({...values, [name] : event.target.value})
    }

    const onSubmit = async() =>{
        const payload={
            region_name:(values.region_name) || ''
        }
        await regionApi.create(payload)
        .then(()=>{
            setRefresh(true)
            window.alert("Data Added Succesfully")
        })
        setDisplay(false)
    }

    const onDelete= async(id) =>{
        regionApi.deletes(id)
        .then(result=>{
            setRefresh(true)
            window.alert("Data Deleted Succesfully")
        })
    }

  return (
    <div>
        <div>
                <h2>List Region</h2>
                <button onClick={()=> setDisplay(true)}> Add Region </button>
                {
                    display ?
                    <RegionAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleChange}
                    setDisplay = {setDisplay}
                />
                :
                        <>
                            <table>
                                <th>Region ID</th>
                                <th>Region Name</th>
                                <th>Country Name</th>
                                <th>Action</th>
                                <tbody>
                                    {
                                        region&&region.map( reg => (
                                            <tr key={reg.region_id}>
                                                <td>{reg.region_id}</td>
                                                <td>{reg.region_name}</td>
                                                <td>{reg && reg.countries.map(coun => (
                                                    coun.country_name+"; "
                                                ))}</td>
                                                <td><button onClick={()=> onDelete(reg.region_id)}> Delete Region </button></td>
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