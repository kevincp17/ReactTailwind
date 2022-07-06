import React,{useState,useEffect} from 'react'
import locationApi from '../api/locationApi'

export default function LocationView() {
 const [location,setLocation] = useState([])

    useEffect(() => {
        locationApi.list().then(data => {
            setLocation(data)
        })
    },[])

  return (
    <div>
        <div>
                <h2>List Location</h2>
                
                {
                        <>
                            <table>
                                <th>Location ID</th>
                                <th>Street Address</th>
                                <th>Postal Code</th>
                                <th>City</th>
                                <th>State Province</th>
                                <tbody>
                                    {
                                        location&&location.map( loc => (
                                            <tr key={loc.location_id}>
                                                <td>{loc.location_id}</td>
                                                <td>{loc.street_address}</td>
                                                <td>{loc.postal_code}</td>
                                                <td>{loc.city}</td>
                                                <td>{loc.state_province}</td>
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