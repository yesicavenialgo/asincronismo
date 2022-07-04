
const params = new URLSearchParams(window.location.search);
const cardEdit = document.getElementById('detail-card')
const formE = document.getElementById('form-edit-job')


 const loadCard = async() =>{

    const job = await getJob(params.get('id'));

        const card = document.createElement('div');
        card.classList.add('card')
        const title = document.createElement('h1');
        title.classList.add('titleJob')
        const desc = document.createElement('p');
        const loc = document.createElement('span');
        const sen = document.createElement('span');
        const cat = document.createElement('span');

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(loc);
        card.appendChild(sen);
        card.appendChild(cat);

        const textTitle = document.createTextNode(job.job);
        const textDesc = document.createTextNode(job.description);
        const textLoc = document.createTextNode(job.location);
        const textSen = document.createTextNode(job.seniority);
        const textCat = document.createTextNode(job.category);

        title.appendChild(textTitle);
        desc.appendChild(textDesc);
        loc.appendChild(textLoc);
        sen.appendChild(textSen);
        cat.appendChild(textCat);


        const editBtn = document.createElement('button');
        editBtn.classList.add('btnHome')
        const textEditBtn = document.createTextNode('Edit')
        editBtn.appendChild(textEditBtn);
        editBtn.addEventListener('click',async()=>{
            
            await loadform()
                })
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btnHome')
        const textDeleteBtn = document.createTextNode('Delete')
        deleteBtn.appendChild(textDeleteBtn);


        card.appendChild(editBtn);
        card.appendChild(deleteBtn);
        document.body.appendChild(card);

    }

loadCard(cardEdit);


const loadform = async()=>{
const job = await getJob(params.get('id'));
            console.log(job)

                formE.job.value = job.job;
                formE.description.value = job.description;
                formE.location.value = job.location;
                formE.seniority.value = job.seniority;
                formE.category.value = job.category; 
            }


formE.addEventListener('submit', async (e) =>{

    const u = {
        id: params.get('id'),
        job : e.target.job.value,
        description : e.target.description.value,
        location : e.target.location.value,
        seniority : e.target.seniority.value,
        category : e.target.category.value
    }

   const data = await editJob(u)
   console.log(data)
})

/* FALTA
-Hacer que el fomulario aparezca luego de que se realice el evento(por ahora está hecho
    en HTML porque quería ver si me estaba trayendo los datos)
-Guardar los datos editados.
-Realizar parte de filtros

*/

    // const title = document.createElement('input');
                     
    // const desc = document.createElement('input');
    
    // const loc = document.createElement('input');
    
    // const sen = document.createElement('input');
     
    // const cat = document.createElement('input');
    
    // formE.appendChild(title);
    // formE.appendChild(desc);
    // formE.appendChild(loc);
    // formE.appendChild(sen);
    // formE.appendChild(cat);
    
    
    // const textTitle = document.createTextNode(job.job);
    // const textDesc = document.createTextNode(job.description);
    // const textLoc = document.createTextNode(job.location);
    // const textSen = document.createTextNode(job.seniority);
    // const textCat = document.createTextNode(job.category);
    
    // title.appendChild(textTitle);
    // desc.appendChild(textDesc);
    // loc.appendChild(textLoc);
    // sen.appendChild(textSen);
    // cat.appendChild(textCat);
    
    
    // document.body.appendChild(formE)
    
    