//Q2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=af37392c64ff4bd9836ad26850276da3"
const htmlContainer = document.querySelector(".newHtml")

async function createHtml(){
    const response = await fetch(url);
    const results = await response.json();

    const info = results.results

    htmlContainer.innerHTML = ""

    for(let i = 0; i < info.length; i++){
        if(i === 8){
            break;
        }

        htmlContainer.innerHTML += `<div class="resultsContainer">
                                    <div>Name: ${info[i].name}</div> 
                                    <div>Rating: ${info[i].rating}</div> 
                                    <div>Number of tags: ${info[i].tags.length}</div> 
                                    </div>`
    }
}


createHtml()