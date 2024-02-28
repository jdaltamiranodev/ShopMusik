const flgasElement = document.getElementById("flags");

const texstToChange = document.querySelectorAll("[data-value");

const changeLanguages =  async language =>{
const requestJson = await fetch(`./languages/${language}.json`)
const texts = await requestJson.json();

for (const textToChange of texstToChange){
    
    const value = textToChange.dataset.value;

    textToChange.innerHTML=texts[value];
}


}

flgasElement.addEventListener("click",(e)=>{
    changeLanguages(e.target.parentElement.dataset.languages);
})