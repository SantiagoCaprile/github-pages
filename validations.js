window.onload = function(){
    const fnombre = document.getElementById("fnombre");
    const fapellido = document.getElementById("fapellido");
    const femail = document.getElementById("femail");
    const fpass = document.getElementById("fpass");
    const ftel = document.getElementById("ftel");
    const fdireccion = document.getElementById("fdireccion");
    const errorNombre = document.getElementsByClassName("error-msg")[0];
    const errorApellido = document.getElementsByClassName("error-msg")[1];
    const errorEmail = document.getElementsByClassName("error-msg")[2];
    const errorPassword = document.getElementsByClassName("error-msg")[3];
    const errorTelefono = document.getElementsByClassName("error-msg")[4];
    const errorDireccion = document.getElementsByClassName("error-msg")[5];
    const botonForm = document.getElementsByClassName("boton-form")[0];
    const suscripcionExitosa = document.getElementById("suscripcion-anuncio");

    function campoMalo(campo, error){
        if(campo.classList.contains('field-ok')){
            campo.classList.remove('field-ok');
        }
        campo.classList.add('field-error');
        error.classList.remove('ocultar');
    }

    function campoBueno(campo, error){
        if(campo.classList.contains('field-error')){
            campo.classList.remove('field-error');
        }
        campo.classList.add('field-ok');
    }

    function quitarCampoMalo(campo, error){
        if(campo.classList.contains('field-error')){
            campo.classList.remove('field-error');
            error.classList.add('ocultar'); 
        }
    }

    function tieneNumero(campo){
        let valor = campo.value;
        for(let i = 0; i<valor.length; i++){
            if(!isNaN(valor[i])){
                return true;
            }
        }
        return false;
    }

    function tieneLetra(campo){
        let valor = campo.value;
        for(let i = 0; i<valor.length; i++){
            if(valor[i].toLowerCase() != valor[i].toUpperCase()){ //es true si es letra
                return true;
            }
        }
        return false;
    }

    fnombre.onblur = function(){
         if(fnombre.value.length < 3){
            campoMalo(fnombre, errorNombre);
        }else{
            campoBueno(fnombre, errorNombre);
        }
    }

    fnombre.onfocus = function(){
        quitarCampoMalo(fnombre, errorNombre);
    }

    fapellido.onblur = function(){
        if(fapellido.value.length < 3){
           campoMalo(fapellido, errorApellido);
       }else{
           campoBueno(fapellido, errorApellido);
       }
   }

    fapellido.onfocus = function(){
        quitarCampoMalo(fapellido, errorApellido);
    }

   fpass.onblur = function(){
       let esInvalida = false;
       if(fpass.value.length < 8 ||
          !tieneNumero(fpass) ||
          !tieneLetra(fpass)){
            esInvalida = true;
       }
       if(esInvalida){
           campoMalo(fpass, errorPassword);
       } else{
           campoBueno(fpass, errorPassword);
       }
   }

   fpass.onfocus = function(){
       quitarCampoMalo(fpass, errorPassword);
    }

   femail.onblur = function(){
       if(femail.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
           campoBueno(femail, errorEmail);
       }else{
           campoMalo(femail, errorEmail);
       }
   }

   femail.onfocus = function(){
       quitarCampoMalo(femail, errorEmail);
    }

   ftel.onblur = function(){
       let tel = ftel.value;
       if(tel.length < 7 ||
        tel.indexOf(" ") != -1 ||
        tel.indexOf("-") != -1 ||
        tel.indexOf("(") != -1 ||
        tel.indexOf(")") != -1){
           campoMalo(ftel, errorTelefono);
       }else{
           campoBueno(ftel, errorTelefono);
       }
   }

   ftel.onfocus = function(){
        quitarCampoMalo(ftel, errorTelefono);
    }

   fdireccion.onblur = function(){
       if(fdireccion.value.length < 5 ||
        fdireccion.value.indexOf(" ") == -1 ||
        !tieneLetra(fdireccion) ||
        !tieneNumero(fdireccion)){
            campoMalo(fdireccion, errorDireccion);
        } else{
            campoBueno(fdireccion, errorDireccion);
        }
    }

    fdireccion.onfocus = function(){
        quitarCampoMalo(fdireccion, errorDireccion);
    }

    //ESTUVE RENENGANDO UN RATO PERO NO SALIO CON ESTA FUNCION PERO NO SALIO
    botonForm.onclick = function(){
        if(fnombre.classList.contains('field-ok') &&
            fapellido.classList.contains('field-ok') &&
            femail.classList.contains('field-ok') &&
            fpass.classList.contains('field-ok') &&
            ftel.classList.contains('field-ok') &&
            fdireccion.classList.contains('field-ok')){
                suscripcionExitosa.classList.remove('ocultar');
                botonForm.classList.add('ocultar');
            }else{
                alert("Algo esta mal");
            }
        }
}
