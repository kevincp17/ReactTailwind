import React, { useState, useEffect } from 'react'
import regionApi from '../api/regionApi'
import RegionAdd from './RegionAdd'
import RegionEdit from './RegionEdit'

export default function RegionView() {
    const [region, setRegion] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        region_id: undefined,
        region_name: undefined,
    })
    useEffect(() => {
        regionApi.list().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    }, [refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onEdit = async () => {
        const payload = {
            region_id: (id.regID),
            region_name: (values.region_name)
        }

        await regionApi.update(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully Edit')
            })

    }
    const onSubmit = async () => {
        const payload = {
            region_name: (values.region_name)
        }

        await regionApi.create(payload)
            .then(() => {
                
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
            setDisplay(false)

    }
    const onDelete = async (id) => {
        regionApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (regID) => {
        setDisplayEdit(true)
        setId(regID)
    }
    return (
        <div>
            <div>
                {
                    displayEdit
                        ?
                        <RegionEdit
                            onSubmit={onEdit}
                            handleOnChange={handleOnChange}
                            id={id}
                            setDisplay={setDisplayEdit}
                        />
                        :
                        display ?
                            <RegionAdd
                                onSubmit={onSubmit}
                                handleOnChange={handleOnChange}
                                setDisplay={setDisplay}
                            />
                            :
                            <>
                                <h2>List Region</h2>
                                <button onClick={() => setDisplay(true)}> Add Region </button>
                                <table>
                                    <th>Region ID</th>
                                    <th>Region Name</th>
                                    <th>Country</th>
                                    <tbody>
                                        {
                                            region && region.map(reg => {
                                                return (
                                                    <tr key={reg.region_id}>
                                                        <td>{reg.region_id}</td>
                                                        <td>{reg.region_name}</td>
                                                        <table>
                                                            <th>Country ID </th>
                                                            <th> Country Name</th>
                                                            <tbody>
                                                                {reg && reg.countries.map(coun => {
                                                                    return (
                                                                        <tr key={coun.country_id}>
                                                                            <td>{coun.country_id}</td>
                                                                            <td>{coun.country_name}</td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                        <button onClick={() => onDelete(reg.region_id)}> Delete Region </button>
                                                        <button onClick={() => onClick({ regID: reg.region_id })}> Edit Region </button>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                }
            </div>
        </div>
    )
}