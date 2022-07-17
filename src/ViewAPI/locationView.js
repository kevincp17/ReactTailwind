import React,{useState,useEffect} from 'react'
import locationApi from '../api/locationApi'
import LocationAdd from './LocationAdd'
import LocationEdit from './LocationEdit'

export default function LocationView() {
 const [location,setLocation] = useState([])
 const [display,setDisplay] = useState(false)
 const [displayEdit, setDisplayEdit] = useState(false)
const [refresh, setRefresh] = useState(false)
const [id, setId] = useState({})
 const [values,setValues] = useState ({
    location_id:0,
    street_address:"",
    postal_code:"",
    city:"",
    state_province:"",
    country_id:0
 }) 

 useEffect(() => {
     locationApi.list().then(data => {
         setLocation(data)
     })
     setRefresh(false)
 },[refresh])

 const handleOnChange = name => event => {
     setValues({ ...values, [name]: event.target.value })
 }

 const onEdit = async () => {
    const payload = {
        location_id:(id.locID),
        street_address:(values.street_address),
        // postal_code:(values.postal_code),
        // city:(values.city),
        // state_province:(values.state_province),
        // country_id:(values.country_id)
    }

    await locationApi.update(payload)
        .then(() => {
            setDisplayEdit(false)
            setRefresh(true)
            window.alert('Data Successfully Edit')
        })

}

 const onSubmit = async() => {
     const payload = {
        location_id:(parseInt(values.location_id)),
        street_address:(values.street_address),
        postal_code:(values.postal_code),
        city:(values.city),
        state_province:(values.state_province),
        country_id:(values.country_id)
     }
     
     await locationApi.create(payload)
     .then(()=>{
         setDisplay(false) 
         setRefresh(true)
        window.alert('Data Successfully Insert')
     })
   
 }
 const onDelete = async(id) => {
     locationApi.deleted(id)
     .then(()=>{
         setRefresh(true)
         window.alert('Data Successfully Delete')
     })
 }

 const onClick = (locID) => {
    setDisplayEdit(true)
    setId(locID)
}
  return (
    <div>
        <div>
                <h2>List Location</h2>
                <button onClick={()=> setDisplay(true)}> Add Location </button>
                {
                    displayEdit
                    ?
                    <LocationEdit
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                    <LocationAdd
                    onSubmitForm = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                />
                :
                        <>
                            <table>
                                <th>Location ID</th>
                                <th>Street Address</th>
                                <th>Postal Code</th>
                                <th>City</th>
                                <th>State Province</th>
                                <th>Action</th>
                                <tbody>
                                    {
                                        location&&location.map( loc => (
                                            <tr key={loc.location_id}>
                                                <td>{loc.location_id}</td>
                                                <td>{loc.street_address}</td>
                                                <td>{loc.postal_code}</td>
                                                <td>{loc.city}</td>
                                                <td>{loc.state_province}</td>
                                                <td>
                                                    <button onClick={()=> onDelete(loc.location_id)}> Delete Location </button>
                                                    <button onClick={() => onClick({ locID: loc.location_id })}> Edit Location </button>
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