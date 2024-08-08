function encripta() { // Función de encriptación
    let textoEncripta = document.getElementById('mensajeTexto').value; // Solo acepta letras minúsculas

    if (textoEncripta === "") {
        // Mostrar alerta de error
        alert("Por favor, ingrese un texto para encriptar.");
        return;
    }

    else if (/[^a-z\s]/.test(textoEncripta)) {
        // Mostrar alerta de error si hay caracteres no permitidos
        alert("Por favor, ingrese solo letras minúsculas y espacios.");
        limpiarCaja();
        return;
    }

    let textoCifrado = textoEncripta
        .replace(/e/gi, "enter") // La letra "e" es convertida para "enter"
        .replace(/i/gi, "imes")  // La letra "i" es convertida para "imes"
        .replace(/a/gi, "ai")    // La letra "a" es convertida para "ai"
        .replace(/o/gi, "ober")  // La letra "o" es convertida para "ober"
        .replace(/u/gi, "ufat"); // La letra "u" es convertida para "ufat"

    document.getElementById('mensajeResultado').value = textoCifrado; // Imprime en el resultado, después de presionar el botón encripta
    document.getElementById('imagenLogo').style.display = 'none'; // La imagen desaparece cuando el resultado se muestra
    document.getElementById('imagenLogoMuñeco').style.display = 'none'; // Lo mismo que la anterior
    document.getElementById('botonCopiar').style.display = 'block'; // El botón copiar solo aparece cuando hay un resultado
    return;
}

function desEncripta() {
    let textoDesencripta = document.getElementById('mensajeTexto').value.toLowerCase();

    if (textoDesencripta === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
        return;
    }

    else if (/[^a-z\s]/.test(textoDesencripta)) {
        // Mostrar alerta de error si hay caracteres no permitidos
        alert("Por favor, ingrese solo letras minúsculas y espacios.");
        limpiarCaja();
        return;
    }

    let textoCifrado = textoDesencripta
        .replace(/enter/gi, "e") // La palabra "enter" es convertida para "e"
        .replace(/imes/gi, "i")  // La palabra "imes" es convertida para "i"
        .replace(/ai/gi, "a")    // La palabra "ai" es convertida para "a"
        .replace(/ober/gi, "o")  // La palabra "ober" es convertida para "o"
        .replace(/ufat/gi, "u"); // La palabra "ufat" es convertida para "u"

    document.getElementById('mensajeResultado').value = textoCifrado;
    document.getElementById('imagenLogo').style.display = 'none';
    document.getElementById('imagenLogoMuñeco').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block'; 
    return;
}

function btnCopiar() {  //Funcion boton copiar
    let textoResultado = document.getElementById('mensajeResultado').value; //Se declara la variable textoResultado con el elemento Id "mensajeResultado"

    navigator.clipboard.writeText(textoResultado).then(() => { //Intenta copiar el texto al portapapeles
        alert("Texto copiado al portapapeles.");//.then si tiene exito mostrara una alerta 
        limpiarCaja();
    }).catch(err => {//Si no mostrara un error en consola
        console.error("Error al copiar el texto: ", err);
    });
}

function limpiarCaja() {
    document.querySelector('#mensajeTexto').value = "";
}