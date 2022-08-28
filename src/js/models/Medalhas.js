class Medalhas {
    static countries;
    static async getCountries() {
        Medalhas.countries = await fetch("https://kenzie-olympics.herokuapp.com/paises")
            .then((response) => response.json())
        Medalhas.addTotal()}
    static addTotal() {
        Medalhas.countries.forEach((country) => {
            country.total = (
                country.medal_bronze +
                country.medal_silver +
                country.medal_gold
            );
        });
        Medalhas.countries.sort((current, next) => {
            return (next.total !== current.total) ? next.total - current.total : next.medal_gold - current.medal_gold;});
        let position = 1;
        Medalhas.countries.forEach((country) => {
            country.position = position;
            position++;})
    }
}
export {
    Medalhas
}