const form = document.getElementById ('form-add-job');

form.addEventListener('submit', async (e) =>{
    e.preventDefault()
   
    const u = {
        job : e.target.job.value,
        description : e.target.description.value,
        location : e.target.location.value,
        seniority : e.target.seniority.value,
        category : e.target.category.value
    }

   const data = await addJob(u)
   console.log(data)
})
