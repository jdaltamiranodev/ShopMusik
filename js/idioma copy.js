const flgasElement = document.getElementById("flags");

const texstToChange = document.querySelectorAll("[data-section");

const changeLanguages =  async language =>{
const requestJson = await fetch(`./languages/${language}.json`)
const texts = await requestJson.json();

for (const textToChange of texstToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML=texts[section][value];
}


}

flgasElement.addEventListener("click",(e)=>{
    changeLanguages(e.target.parentElement.dataset.languages);
})