const addJob = async (job)=>{

    const options = {
        method : 'POST',
        body : JSON.stringify(job),
        Headers: {
            contentType: 'application/json'}
    }

  
   const response = await fetch('https://asincronismo-729fa-default-rtdb.europe-west1.firebasedatabase.app/add-job.json', options)
   const data = await response.json()

   return mapToArray(data);
}
const getJobs= async() =>{
    
    const response = await fetch('https://asincronismo-729fa-default-rtdb.europe-west1.firebasedatabase.app/add-job.json')
    const data = await response.json()

    return mapToArray(data);
}
const getJob = async (id) => {
    const response = await fetch(`https://asincronismo-729fa-default-rtdb.europe-west1.firebasedatabase.app/add-job/${id}.json`)
    const data = await response.json()

   return data;
}

const editJob = async (job) =>{

    const options = {
        method : 'PATCH',
        body : JSON.stringify(job),
        Headers: {
            contentType: 'application/json'}
    }

   const response = await fetch(`https://asincronismo-729fa-default-rtdb.europe-west1.firebasedatabase.app/add-job/${job.id}.json`,options)
   const data = await response.json()

   return mapToArray(data);
}