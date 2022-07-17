import React, { useState, useEffect } from 'react'
import countryApi from '../api/countryApi'

export default function CountryAdd(props) {
    const [country, setCountry] = useState([])

    useEffect(() => {
        countryApi.findOne(props.id.countryID).then(data => {
            setCountry(data)
        })
    },[])
  return (
    <div>
        <h2>Edit Country</h2>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Country ID : </label>
                <input type="text" defaultValue={country.country_id}
                onChange = {props.handleOnChange('country_id')}/>
            </div>

            <div>
                <label>Country Name : </label>
                <input type="text" placeHolder={country.country_name}
                onChange = {props.handleOnChange('country_name')}/>
            </div>
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}