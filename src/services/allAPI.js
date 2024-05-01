import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";



//add video called by add
export const addVIdeoAPI = async (video)=>{ //only export  bcz in this function multiple thing need to happen
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// to get the video from the json file
export const getVIdeoAPI = async ()=>{ 
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}


export const removeVideoAPI  = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})

}

//saveHistory called by video card component
export const saveHistoryAPI = async (video)=>{ //only export  bcz in this function multiple thing need to happen
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//getHistory called by video card component
export const getHistoryAPI = async ()=>{ //only export  bcz in this function multiple thing need to happen
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove History called  by history component
 export const removeHistoryAPI = async (videoId)=>{
return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{}) 

 }

 //add category called by category componnet
 export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
 }

  //get category called by category componnet
  export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
 }


//remove Category called  by category component
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{}) 
    
     }
