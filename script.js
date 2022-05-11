function aparecerMenuLateral(){ // FECHA MENU LATERAL 
    document.getElementById("elemento").classList.remove('invible-menu-lateral');
    elemento.classList.add('invible-menu-lateral2'); 
}
function fecharMenu(){   // FECHA MENU LATERAL 
    document.getElementById("elemento").classList.remove('invible-menu-lateral2');
    elemento.classList.add('invible-menu-lateral'); 
}

//SCRIPT-BOTÃO-INCREMENTAR-DESCREMENTAR

var counterVal = 0; 

function incrementClick() {
    updateDisplay(++counterVal);
}
function decrementClick() {
    updateDisplay(--counterVal);
    {
        if (counterVal == -1) {
            alert("APENAS QUANTIDADES ACIMA DE 0");
            updateDisplay(counterVal = 0);
        }
    }
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}


