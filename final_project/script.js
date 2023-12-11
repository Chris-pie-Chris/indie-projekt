// Import af data fra JSON-filen (antager, at './data.json' er det korrekte sti)
import produkter from './data.json' assert {type: JSON};

// fetch('./data.json')
//   .then(response => response.json()) // Konverterer svaret til JSON-format
//   .then(data => { // Bruger dataene, når de er klar
//     data.forEach(renderProdukt); // Kalder renderProdukt-funktionen for hvert element i data-arrayet
//   })
//   .catch(error => { // Håndterer eventuelle fejl under hentningen af dataene
//     console.error('Fejl ved indlæsning af data:', error);
//   });

// Loop gennem produkterne og opret HTML-elementer
produkter.forEach(renderProdukt);

// fetch('./data.json')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(renderProdukt);
//   })
//   .catch(error => {
//     console.error('Fejl ved indlæsning af data:', error);
//   });

function renderProdukt(data) {
    let article = document.createElement("article");
    article.className = "produkter";
    article.innerHTML = `
      <div class="produkt">
        <p>${data.name}</p>
        <p>${data.price}</p>
        <img src="${data.imgpath}" alt="${data.name}">
      </div>
    `;
    document.querySelector("#produkter").appendChild(article);
  }



// function renderProdukt(produkter, index) {
//     `<a href="produkt.html?id=${index}" >${produkt.name}</a>`
// }

// const params = new URLSearchParams(location.search)

// console.log(params.get("id"))
// console.log(produkter[params.get("id")])

