import React,{useState,useEffect} from 'react'
import countryApi from '../api/countryApi'

export default function CountryView() {
 const [country,setCountry] = useState([])

    useEffect(() => {
        countryApi.list().then(data => {
            setCountry(data)
        })
    },[])

  return (
    <div>
        <div>
                <h2>List Country</h2>
                
                {
                        <>
                            <table>
                                <th>Country ID</th>
                                <th>Country Name</th>
                                <tbody>
                                    {
                                        country&&country.map( count => (
                                            <tr key={count.country_id}>
                                                <td>{count.country_id}</td>
                                                <td>{count.country_name}</td>
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