var finestra;

function crear() {
    finestra = window.open("", "", "toolbar=no, scrollbars=yes, width=400, height=400, top=250, left=250");
    window.finestra.document.write("Hola!!");
    
    return true;
}

function mover() {
    window.finestra.moveBy(50, 0);
    window.finestra.focus();
    
    return true;
}

