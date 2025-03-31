let allCountries = [];

async function searchCountries(value){
    //https://restcountries.com/v3.1/region/{region}
    let reply = await fetch(`https://restcountries.com/v3.1/${value}`);
    let data = await reply.json();
    allCountries = data;
    renderCountries(allCountries);
}
function searchCounty(input) {
    // let pais = document.getElementById('paises').value.toLowerCase();
    // let nome = "name/" + pais;
    // searchCountries(nome); 

    const searchedCountries = [];
    const name = input.value.toLowerCase();
    for (let country of allCountries) {
        if(country.translations.por.common.toLowerCase().startsWith(name)){
            searchedCountries.push(country);
        }
    }
    renderCountries(searchedCountries);
}

function filterCountries(input){
    console.log(input.value);
    searchCountries(input.value);
}

function renderCountries(allCountries){
    document.querySelector(".allCountries").innerHTML = "";
    document.querySelector("#qt").innerHTML = allCountries.length;


    for (let country of allCountries){
        // console.log(country.name.common);
        // console.log(country.flags.png);

        let card = document.createElement("div");

        card.classList.add("country");
        card.innerHTML = `
        <img width="200", height="150", object-fit="cover",
        src="${country.flags.png}"  
        alt="${country.flags.alt}">
        <span>${country.translations.por.common}</span>
        `;
        card.addEventListener("click", ()=> { // função de flash
            window.location.href=`infoCountry.html?Country=${country.translations.por.common}`
        });
        
        document.querySelector(".allCountries").appendChild(card);
    }
}
searchCountries("all");
