import React,{useState,useEffect} from 'react'
import countryApi from '../api/countryApi'
import CountryAdd from './CountryAdd'

export default function CountryView() {
 const [country,setCountry] = useState([])
 const [display,setDisplay]=useState(false)
 const [refresh,setRefresh]=useState(false)
 const [values,setValues]=useState({
        country_id:'',
        country_name:'',
        region_id:0
})

useEffect(() => {
    countryApi.list().then(data => {
        setCountry(data)
    })
    setRefresh(false)
},[refresh])

const handleOnChange = name => event =>{
    setValues({...values, [name] : event.target.value})
}

const onSubmit = async() =>{
    const payload={
        country_id:(values.country_id),
        country_name:(values.country_name),
        region_id:parseInt(values.region_id)
    }
    await countryApi.create(payload)
    .then(()=>{
        setDisplay(false)
        setRefresh(true)
        window.alert("Data Added Succesfully")
    })
    
}

const onDelete= async(id) =>{
    countryApi.deletes(id)
    .then(result=>{
        setRefresh(true)
        window.alert("Data Deleted Succesfully")
    })
}

  return (
    <div>
        <div>
                <h2>List Country</h2>
                <button onClick={()=> setDisplay(true)}> Add Country </button>
                {
                    display ?
                    <CountryAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                />
                :
                        <>
                            <table>
                                <th>Country ID</th>
                                <th>Country Name</th>
                                <th>Street Address</th>
                                <th>Action</th>
                                <tbody>
                                    {
                                        country&&country.map( count => (
                                            <tr key={count.country_id}>
                                                <td>{count.country_id}</td>
                                                <td>{count.country_name}</td>
                                                <td>{count && count.locations.map(loc => (
                                                    loc.street_address+'; '
                                                ))}</td>
                                                <td><button onClick={()=> onDelete(count.country_id)}> Delete Country </button></td>
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