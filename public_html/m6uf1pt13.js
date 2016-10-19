
var finestra;

function crear() {
    finestra = window.open("", "", "toolbar=no, scrollbars=yes, width=400, height=400, top=250, left=250");
    window.finestra.document.write("Hola!!");
    
    return true;
}

function mover() {
    window.finestra.moveBy(arguments[0], arguments[1]);
    window.finestra.focus();
    
    return true;
}

function moverFix() {
    window.finestra.moveTo(arguments[0], arguments[1]);
    window.finestra.focus();
    
    return true;
}

function canviaTamany() {
    window.finestra.resizeBy(arguments[0], arguments[1]);
    window.finestra.focus();
    
    return true;
}

function canviaFixTamany() {
    window.finestra.resizeTo(arguments[0], arguments[1]);
    window.finestra.focus();  
    
    return true;
}

function missatge() {
    window.finestra.document.write("<script>function missPare() { window.opener.document.getElementById(\'desti\').innerHTML = arguments[0]; }</script>");
    window.finestra.document.write("<div>" + arguments[0] + "</div>");
    window.finestra.document.write("<div><input type='text' id='miss2' value='Escriu el missatge...' />");
    window.finestra.document.write("<input type=\"button\" onclick=\"missPare(document.getElementById(\'miss2\').value);\" value=\"Envia missatge\" /><br /></div>");
    window.finestra.focus();
    
    return true;
}

function imatge() {
    window.finestra.document.write("<div><img src='imatge.jpg' /></div>");
    window.finestra.focus();
    
    return true;
}