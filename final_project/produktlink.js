function renderProdukt(produkter, index) {
    `<a href="produkt.html?id=${index}">${produkter.name}</a>`
}
const params = new URLSearchParams(location.search)

console.log(params.get("name"))
console.log(produkter[params.get("name")])