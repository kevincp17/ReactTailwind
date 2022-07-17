import React,{useEffect,useState} from 'react'
import locationApi from '../api/locationApi'

export default function LocationAdd(props){
    const [location, setLocation] = useState([])

    useEffect(() => {
        locationApi.findOne(props.id.locID).then(data => {
            setLocation(data)
        })
    },[])
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Location ID: </label>
                <input type="text" defaultValue={location.location_id}
                onChange = {props.handleOnChange('location_id')}/>
            </div>

            <div>
                <label>Street Address: </label>
                <input type="text" placeHolder={location.street_address}
                onChange = {props.handleOnChange('street_address')}/>
            </div>

            {/* <div>
                <label>Postal Code: </label>
                <input type="text" placeHolder="Postal Code" 
                onChange = {props.handleOnChange('postal_code')}/>
            </div>

            <div>
                <label>City: </label>
                <input type="text" placeHolder="City" 
                onChange = {props.handleOnChange('city')}/>
            </div>

            <div>
                <label>Province: </label>
                <input type="text" placeHolder="Province" 
                onChange = {props.handleOnChange('state_province')}/>
            </div>

            <div>
                <label>Country ID : </label>
                <input type="text" placeHolder="Country ID" 
                onChange = {props.handleOnChange('country_id')}/>
            </div> */}
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}


