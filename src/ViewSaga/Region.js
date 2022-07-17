import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetRegionRequest,DelRegionRequest } from '../Redux-saga/Action/RegionAction'
import { IdentificationIcon,UserIcon,MailIcon,PhoneIcon,CalendarIcon,PhotographIcon,ViewListIcon,PencilAltIcon,TrashIcon } from '@heroicons/react/outline'

export default function Region() {
    const dispatch = useDispatch()
    const {regions} = useSelector(state => state.regionStated)
    
    useEffect(() => {
        dispatch(GetRegionRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(DelRegionRequest(id))
    }

    return (
        <div>
            <h1 className='font-bold'>List of Regions</h1>
            <button type="button" className="mb-8 cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg> Add Region </button>
            <div className='justify-center'> 
                <table className="text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-9 py-3"><IdentificationIcon className='basis-1/4 h-6'/>Region ID</th>
                            <th scope="col" className="px-6 py-3"><UserIcon className='basis-1/4 h-6'/>Region Name</th>
                            <th scope="col" className="px-6 py-3"><ViewListIcon className='basis-1/4 h-6'/>Setting</th>
                        </tr>
                    </thead>
                    <tbody className="overscroll-auto md:overscroll-contain">
                        {
                            regions && regions.map(regi => {
                                return (
                                    <tr key={regi.region_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{regi.region_id}</td>
                                        <td className="px-6 py-2">{regi.region_name}</td>
                                        <td className='py-2 flex'>
                                            <div className="w-1/2">
                                                <button type="button" className="mx-2 mb-2 cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><PencilAltIcon className='basis-1/4 h-6'/>Edit</button>
                                            </div>
                                            
                                            <div className="w-1/2">
                                                <button type="button" className="mx-2 cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><TrashIcon className='basis-1/4 h-6'/>Delete</button>
                                            </div>
                                        </td>                                     
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}