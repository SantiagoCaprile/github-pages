window.onload = function(){
    const fnombre = document.getElementById("fnombre");
    const fapellido = document.getElementById("fapellido");
    const femail = document.getElementById("femail");
    const fpass = document.getElementById("fpass");
    const ftel = document.getElementById("ftel");
    const fdireccion = document.getElementById("fdireccion");

    function campoMalo(campo){
        campo.classList.remove('field-ok');
        campo.classList.add('field-error');
    }

    function campoBueno(campo){
        campo.classList.remove('field-error');
        campo.classList.add('field-ok');
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
            campoMalo(fnombre);
        }else{
            campoBueno(fnombre);
        }
    }

    //agregar onfocus fnombre

    fapellido.onblur = function(){
        if(fapellido.value.length < 3){
           campoMalo(fapellido);
       }else{
           campoBueno(fapellido);
       }
   }

   //agregar onfocus
    
   fpass.onblur = function(){
       let esInvalida = false;
       if(fpass.value.length < 8 ||
          !tieneNumero(fpass) ||
          !tieneLetra(fpass)){
            esInvalida = true;
       }
       if(esInvalida){
           campoMalo(fpass);
       } else{
           campoBueno(fpass);
       }
   }

   femail.onblur = function(){
       if(femail.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
           campoBueno(femail);
       }else{
           campoMalo(femail);
       }
   }

   //agregar onfocus femail

   ftel.onblur = function(){
       let tel = ftel.value;
       if(tel.length < 7 ||
        tel.indexOf(" ") != -1 ||
        tel.indexOf("-") != -1 ||
        tel.indexOf("(") != -1 ||
        tel.indexOf(")") != -1){
           campoMalo(ftel);
       }else{
           campoBueno(ftel);
       }
   }

   //agregar onfocus ftel

   fdireccion.onblur = function(){
       if( fdireccion.value.length < 5 ||
        fdireccion.value.indexOf(" ") == -1 ||
        !tieneLetra(fdireccion) ||
        !tieneNumero(fdireccion)){
            campoMalo(fdireccion);
        } else{
            campoBueno(fdireccion);
        }
    }

    //agregar onfocus fdireccion
}




