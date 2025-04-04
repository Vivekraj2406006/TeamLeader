// Dark mode toggle function

modediv = document.getElementById("modediv");
modebut = document.getElementById("modebut");
fixedmodediv = document.getElementById("fixedmodediv");


function modechange() {
    const body = document.body;
    const main = document.querySelector("main");
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modediv.style.backgroundColor = "black";
        modediv.style.border = "2px solid white";
        modebut.style.backgroundColor = "white";
        modebut.style.border = "3px solid black";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(0px)`;   
        main.style.boxShadow = "0 0 4px black" 
        fixedmodediv.title = "Dark Mode Toggle";



    } 
    
    else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        modediv.style.backgroundColor = "white";
        modediv.style.border = "2px solid black";
        modebut.style.backgroundColor = "black";
        modebut.style.border = "3px solid white";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(20px)`;
        main.style.boxShadow = "0 0 4px white";
        fixedmodediv.title = "Light Mode Toggle";

}
}






// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const main = document.querySelector("main");
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'light') {
        modediv.style.backgroundColor = "black";
        modediv.style.border = "2px solid white";
        modebut.style.backgroundColor = "white";
        modebut.style.border = "3px solid black";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(0px)`; 
        main.style.boxShadow = "0 0 4px black"
        fixedmodediv.title = "Dark Mode Toggle";
 

        
    } 
    
    else {
        modediv.style.backgroundColor = "white";
        modediv.style.border = "2px solid black";
        modebut.style.backgroundColor = "black";
        modebut.style.border = "3px solid white";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(20px)`;
        main.style.boxShadow = "0 0 4px white";
        fixedmodediv.title = "Light Mode Toggle";


        
    }

});



document.getElementById('contactreason').addEventListener('change', function() {
    const otherPara = document.getElementById('otherpara');
    if (this.value === 'Other') {
        otherPara.style.display = 'block';
    } else {
        otherPara.style.display = 'none';
    }
});

