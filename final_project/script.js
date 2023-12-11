// Import af data fra JSON-filen (antager, at './data.json' er det korrekte sti)
import produkter from './data.json';

// Loop gennem produkterne og opret HTML-elementer
produkter.forEach(renderProdukt);

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
    document.querySelector("#produkttest").append(article);
}



// function renderProdukt(produkt, index) {
//     `<a href="produkt.html?id=${index}" >${produkt.name}</a>`
// }

// const params = new URLSearchParams(location.search)

// console.log(params.get("id"))
// console.log(produkter[params.get("id")])