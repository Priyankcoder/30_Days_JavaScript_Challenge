
const cities = []
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
fetch(endpoint) //Returning Promise
.then(blob => blob.json())         //Coverting promise to data but it don't know what kind of data. So, we have to tell it explicitly. 
.then(data => cities.push(...data));          //Extracted data covert into promise again. So, again coverting promise into data.  
console.log(cities);

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function similar(val){

    const regex = new RegExp(val, 'gi');
    const matched = cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
    return matched;
    
}

function display(){
    const val = this.value 
    const matched = similar(val);
    const in_html = matched.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityN = place.city.replace(regex, `<span class = "hl">
        ${this.value}</span>`);
        const stateN = place.state.replace(regex, `<span class = "hl ">
        ${this.value}</span>`);
        return `
        <li>
            <span class = "name">${cityN}, ${stateN} </span>
            <span class = "population"> ${numberWithCommas(place.population)} </span>
         <li> 
        `;

    });
    suggestions.innerHTML = in_html.join('');
    



}

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

search.addEventListener("change", display);
search.addEventListener("keyup", display);



