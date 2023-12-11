// Import af data fra JSON-filen (antager, at './data.json' er det korrekte sti)
import produkter from './data.json' assert {type: "json"};

// Loop gennem produkterne og opret HTML-elementer
produkter.forEach(renderProdukt);

function renderProdukt(data) {
    let article = document.createElement("article");
    article.className = "produkter";
    article.innerHTML = `
      <div class="produkt">
        <p>${data.name}</p>
        <p>${data.price}</p>
        <a href="produkt.html?id=${index}"><img src="${data.imgpath}" alt="${data.name}"></a>
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