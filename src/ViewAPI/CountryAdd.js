import React from 'react'

export default function CountryAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Country ID : </label>
                <input type="text" placeHolder="Country ID" 
                onChange = {props.handleOnChange('country_id')}/>
            </div>

            <div>
                <label>Country Name : </label>
                <input type="text" placeHolder="Country Name" 
                onChange = {props.handleOnChange('country_name')}/>
            </div>

            <div>
                <label>Region ID : </label>
                <input type="text" placeHolder="Region Name" 
                onChange = {props.handleOnChange('region_id')}/>
            </div>
        
            <div>
                <button type="submit"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}