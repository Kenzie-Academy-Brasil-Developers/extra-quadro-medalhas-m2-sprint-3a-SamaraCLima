import {
    Medalhas
} from "./models/Medalhas.js";
import {
    Acoes
} from "./models/Acoes.js";
await Medalhas.getCountries()
Medalhas.countries.forEach((country) => {
    Acoes.createTableRow(country);
    Acoes.showingCountries.push(country);
});
const tableHeader = document.getElementById("table-header");
tableHeader.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "sort-by-position":
            Acoes.SortBy("position", event.target.id);
            break;
        case "sort-by-gold":
            Acoes.SortBy("medal_gold", event.target.id);
            break;
        case "sort-by-silver":
            Acoes.SortBy("medal_silver", event.target.id);
            break;
        case "sort-by-bronze":
            Acoes.SortBy("medal_bronze", event.target.id);
            break;
    }})
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    Acoes.search(document.getElementById("search-box").value, Medalhas.countries)})