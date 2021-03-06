import axios from "axios";

export const uploadImage =async (file)=>{
    if(!file) return 
    // journalApi

    try {
        const formData = new FormData()
        formData.append('upload_preset','vue-curso')
        formData.append('file',file)
        const url = 'https://api.cloudinary.com/v1_1/dlhwnrcqk/image/upload';
        const {data} = await axios.post(url,formData)
        return data.secure_url
    } catch (error) {
        return null
    }
}