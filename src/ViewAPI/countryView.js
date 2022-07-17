import React,{useState,useEffect} from 'react'
import countryApi from '../api/countryApi'
import CountryAdd from './CountryAdd'
import CountryEdit from './CountryEdit'

export default function CountryView() {
 const [country,setCountry] = useState([])
 const [display,setDisplay]=useState(false)
 const [displayEdit, setDisplayEdit] = useState(false)
 const [refresh,setRefresh]=useState(false)
 const [id, setId] = useState({})
 const [values,setValues]=useState({
        country_id:undefined,
        country_name:undefined
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

const onEdit = async () => {
    const payload = {
        country_id: (id.countryID),
        country_name: (values.country_name)
    }

    await countryApi.update(payload)
        .then(() => {
            setDisplayEdit(false)
            setRefresh(true)
            window.alert('Data Successfully Edit')
        })

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

const onClick = (countryID) => {
    setDisplayEdit(true)
    setId(countryID)
}

  return (
    <div>
        <div>
                <h2>List Country</h2>
                <button onClick={()=> setDisplay(true)}> Add Country </button>
                {
                    displayEdit
                    ?
                    <CountryEdit
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
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
                                                <td>
                                                    <button onClick={()=> onDelete(count.country_id)}> Delete Country </button>
                                                    <button onClick={() => onClick({ countryID: count.country_id })}> Edit Country </button>
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