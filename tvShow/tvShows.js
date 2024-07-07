

const form = document.querySelector("form");

form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const searchTerm = form.elements.query.value
    //  const config = {params:{q: searchTerm}}
    //  const res = await axios.get(`https://api.tvmaze.com/search/shows`)
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
     makeImages(res.data)

})

const makeImages = (shows) => {

        for (let show of shows){
            const img = document.createElement("IMG")
            img.src = show.show.image.medium
            document.body.append(img)
        } 
}

const counter = document.querySelector(".counter-number");
const countViews = async () => {
       let response = await fetch("https://ugqb7sjvsyjeicv4zic4anti4i0yhmfg.lambda-url.us-east-1.on.aws/");
       let data = await response.json();
       console.log(data)
       counter.innerHTML = `Views: ${data.views}`;
}

countViews();