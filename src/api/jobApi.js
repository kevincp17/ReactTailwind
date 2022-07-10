import axios from 'axios'
import config from '../config/config'

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/job/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/job/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const deletes = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/job/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default {list,create,deletes}