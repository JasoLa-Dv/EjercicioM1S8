var btn = document.getElementById('btn'),
    caja =document.getElementById('caja'),

    contador=0;

    function cambio(){
    if (contador==0){
        caja.classList.add('roja');
        contador=1;
    }
    else {

        caja.classList.remove('roja');
        contador=0;
    }
    }

    btn.addEventListener('click',cambio,true)

    function cambioTamano(){
        if (contador==0){
            caja.classList.add('tmno');
            contador=1;
        }
        else {
    
            caja.classList.remove('tmno');
            contador=0;
        }
        }
    
    tam.addEventListener('click', cambioTamano,true) 

    function cambioBorde(){
        if (contador==0){
            caja.classList.add('borde');
            contador=1;
        }
        else {
    
            caja.classList.remove('borde');
            contador=0;
        }
        }
    
    bor.addEventListener('click', cambioBorde,true) 

