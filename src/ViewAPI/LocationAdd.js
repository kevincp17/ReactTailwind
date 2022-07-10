import React from 'react'

export default function LocationAdd(props){
  return (
    <div>
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Location ID: </label>
                <input type="text" placeHolder="Location ID" 
                onChange = {props.handleOnChange('location_id')}/>
            </div>

            <div>
                <label>Street Address: </label>
                <input type="text" placeHolder="Street Address" 
                onChange = {props.handleOnChange('street_address')}/>
            </div>

            <div>
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
            </div>
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}


