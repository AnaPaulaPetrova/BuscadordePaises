// Segunda página

    const lerLink= window.location.search;
    const link = new URLSearchParams(lerLink);
    const nomePais = link.get('Country');
    

async function detalhesPais(){
    let reply = await fetch(`https://restcountries.com/v3.1/translation/${nomePais}`);
    let data = await reply.json();

    let resposta =await fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${nomePais}`);
    let dado = await resposta.json();

    let detalhesPais = document.getElementById('detalhes-pais');
    let imagemBandeira = document.getElementById('flags');
    
    imagemBandeira.style.backgroundImage = `url(${data[0].flags.svg})`;

    detalhesPais.innerHTML = ` 
        <div class="titulo"><p>${dado.title}</p></div>
        <div class="descricao"><p><strong>Descrição: </strong> ${dado.extract}</p></div><br/>
        <div class="idioma"><p><strong>Idioma: </strong><span>${Object.values(data[0].languages).join(`, `)}</span></p></div>
        <div class="capital"><p><strong>Capital: </strong>${data[0].capital}</p></div>
        <div class="continente"><p><strong>Continente: </strong>${data[0].continents}</p></div>
        <div class="moeda"><p><strong>Moeda: </strong>${Object.values(data[0].currencies)[0].name}, ${Object.values(data[0].currencies)[0].symbol}</p></div>
        <div class="populacao"><p><strong>População: </strong>${data[0].population} de pessoas</p></div>
        <div class="area"><p><strong>Area Geografica: </strong>${data[0].area} Km²</p></div>
        <div class="link"><strong>Link do maps: </strong><a href="${data[0].maps.googleMaps}">${data[0].maps.googleMaps}</a></div>
        `;

    console.log(data[0]);

}
detalhesPais()