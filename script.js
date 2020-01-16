console.log("Hallo, console?");

/*Stap 1: We nemen eerst de woorden vast die van kleur zullen veranderen*/
let mery = document.getElementById("mery"); //let op! omdat een id maar één keer kan voorkomen mag [] niet!!!
let christmas = document.getElementById("christmas");

/*Stap2: We definiëren de kleur die zal flikkeren*/
let mijnKleur = ["klasse1"];

/*Stap 3: We schrijven een functie die de kleur laat flikkeren*/
function veranderKleur(){
  let teller = 0;
  while (teller<mijnKleur.length) {
    mery.classList.toggle(mijnKleur[teller]);
    christmas.classList.toggle(mijnKleur[teller]);
    teller++;
  }
}

setInterval(veranderKleur, 1000);
