const cards = document.getElementById('cards');


const loadCards = async () =>{

    const jobs = await getJobs();

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('card')
        const title = document.createElement('h1');
        title.classList.add('titleJob')
        const desc = document.createElement('p');
        const loc = document.createElement('span');
        loc.setAttribute("name","location")
        const sen = document.createElement('span');
        sen.setAttribute("name", "seniority")
        const cat = document.createElement('span');
        cat.setAttribute("name","category")

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
    
        const detailBtn = document.createElement('a');
        detailBtn.classList.add('detailBtn')
        const textDetailBtn = document.createTextNode('See details')
        detailBtn.setAttribute('href', `detail-job.html?id=${job.id}`)
        detailBtn.appendChild(textDetailBtn);

       
        card.appendChild(detailBtn);
        document.body.appendChild(card);
       
    
    
    });
    }
loadCards(cards);  



