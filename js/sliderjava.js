$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const navigacia = [{geo: "ფილმები", route: "movies.html"}, {geo: "სერიალები", route: "series.html"}, {geo: "ანიმაციები", route: "animation.html"},{geo: "ანიმეები", route: "movies.html"}];
let ueli = "<ul>"; 
let raodenoba = navigacia.length;

for (let i = 0; i<raodenoba; i++) {
    ueli+=`<li><a href=${navigacia[i].route}> `+ navigacia[i].geo + '</a></li>';
}

document.getElementById("navigacia").innerHTML = ueli;

consol.log(ueli);

ueli += "</ul>"; 