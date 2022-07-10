import axios from 'axios'
import config from '../config/config'

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/dependent/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/dependent/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const deletes = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/dependent/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default {list,create,deletes}