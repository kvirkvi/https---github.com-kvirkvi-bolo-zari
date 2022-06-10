// const navigacia = ["ფილმები", "სერიალები", "ანიმაციები", "ანიმეები"];
const navigacia = [{geo: "ფილმები", route: "movies.html"}, {geo: "სერიალები", route: "series.html"}, {geo: "ანიმაციები", route: "animation.html"},{geo: "ანიმეები", route: "anime.html"}];
let ueli = "<ul>"; 
let raodenoba = navigacia.length;

for (let i = 0; i<raodenoba; i++) {
    ueli+=`<li><a href=${navigacia[i].route}> `+ navigacia[i].geo + '</a></li>';
}

document.getElementById("navigacia").innerHTML = ueli;

consol.log(ueli);

ueli += "</ul>"; 







