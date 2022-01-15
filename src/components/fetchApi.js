import HTTP from "./axiosInstance"

const fetchApi = async()=>{
    try{
        const response = await HTTP("/users")
        if(response.error){
            alert(response.error)
        }
        else alert("Data Fetched Successfully")
    return response.data
    }
    catch(err){
        alert(err)
    }
}
export default fetchApi