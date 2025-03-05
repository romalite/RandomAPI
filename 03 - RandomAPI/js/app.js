const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        
         console.log(data);


         if (Array.isArray(data) && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomImage = data[randomIndex];

        
            image.src = randomImage.url;
            console.log(randomImage)
         } else {
            console.log("pedik")
         }

    } catch (error) {
        console.log(error)
    }

}

button.addEventListener("click", () => {
    let isLoaded = image.complete && image.naturalHeight !== 0;

    if (isLoaded) {
        fetchHandler();
    }
})
