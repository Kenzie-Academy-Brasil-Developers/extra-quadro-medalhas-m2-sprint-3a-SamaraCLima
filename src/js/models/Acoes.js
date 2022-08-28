class Acoes {
    static countriesData = document.getElementById("countries-data");
    static sortSwitcher = {
        "position": true,
        "medal_gold": true,
        "medal_silver": true,
        "medal_bronze": true};
    static showingCountries = [];
    static createTableRow(object) {
        const tableRow   = document.createElement("tr"),
            position     = document.createElement("td"),
            country      = document.createElement("td"),
            countryName  = document.createElement("p"),
            countryGroup = document.createElement("div"),
            flag         = document.createElement("img"),
            goldMedal    = document.createElement("td"),
            silverMedal  = document.createElement("td"),
            bronzeMedal  = document.createElement("td"),
            total        = document.createElement("td");
        position.innerText    = `${object.position}º`;
        position.classList.add("position");
        countryName.innerText = object.country;
        flag.src              = object.flag_url;
        flag.classList.add("flag-img")
        flag.alt              = `${object.country} flag`;
        countryGroup.append(flag, countryName);
        countryGroup.classList.add("countryFlagName");
        country.appendChild(countryGroup);
        country.classList.add("country");
        goldMedal.innerText   = object.medal_gold;
        goldMedal.classList.add("medal_gold");
        silverMedal.innerText = object.medal_silver;
        silverMedal.classList.add("medal_silver");
        bronzeMedal.innerText = object.medal_bronze;
        bronzeMedal.classList.add("medal_bronze");
        total.innerText       = object.total;
        total.classList.add("total");
        tableRow.append(position,
            country,
            goldMedal,
            silverMedal,
            bronzeMedal,
            total)
        Acoes.countriesData.appendChild(tableRow);}
    static SortBy(category, eventTargetId) {
        const oldSort = document.querySelectorAll("table>tr");
        oldSort.forEach((tr) => {
            tr.remove();});
        Acoes.showingCountries.sort((current, next) => {
            return (Acoes.sortSwitcher[category]) ? next[category] - current[category] : current[category] - next[category];});
        Acoes.sortSwitcher[category] = !Acoes.sortSwitcher[category];
        const arrowSwitcher = document.querySelector(`#${eventTargetId}>i`);
        if (Acoes.sortSwitcher[category]) {
            arrowSwitcher.className = "fas fa-chevron-up";
        } else {
            arrowSwitcher.className = "fas fa-chevron-down";
        }
        Acoes.showingCountries.forEach(country => {
            Acoes.createTableRow(country);});
    }
    static search(search, countriesList) {
        const oldSort = document.querySelectorAll("table>tr");
        oldSort.forEach((tr) => {
            tr.remove();});
        search = search.trim().toLowerCase();
        Acoes.showingCountries = [];
        countriesList.forEach((country) => {
            if (country.country.toLowerCase().startsWith(search)) {
                Acoes.createTableRow(country);
                Acoes.showingCountries.push(country);
            }
        });
    }
}
export {
    Acoes
}