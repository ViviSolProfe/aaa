
function CrearCarta(){
    var genero="";
    var a=document.getElementById("rut").value;
    var b=document.getElementById("nom").value;
    var c=document.getElementById("apeP").value;
    var d=document.getElementById("apeM").value;
    var e=document.getElementById("edad").value;
    var f=parseInt(document.getElementById("genero").value);
    if (f===1){
       genero='Mujer';
    }
    if (f===2){
       genero='Hombre';
    }
    if (f==2){
       genero='Otro Genero';
    }

    var cadena= "Rut: " + a + "\n" + "Nombre: " + b + "\n"+ "Ap. Paterno: " + c 
                + "\n" + "Ap. Materno: "+ d + "\n" + "Edad: " + e 
                + "\n" + "Genero: " + genero;  
                
    document.getElementById("carta").value=cadena;
}











function ValidarDatos(){
    alert("hola");
    var a=document.getElementById("nom");
    var b=document.getElementById("email");
    var c=document.getElementById("pass");
    var d=parseInt(document.getElementById("edad")); 

    if(a == null || a.length==0 || /^\s+$/.test(a))
        {
            alert('Error.. debe ingresar un nombre válido');
            document.getElementById('nom').value="";
            document.datos.nom.focus();
            return false;
        }

    if(b == null || b.length==0 || /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(b))
        {
            alert('Error.. debe ingresar un correo válido');
            document.getElementById('email').value="";
            document.datos.email.focus();
            return false;
        }
    

    if(c == null || c.length<8)
        {
            alert('Error.. debe ingresar una contraseña válida');
            document.getElementById('pass').value="";
            document.datos.pass.focus();
            return false;
        }

    if(isNaN(d) || d<=0)
        {
           alert('Error...debe ingresar una edad válida');
           document.getElementById('edad').value="";
           document.datos.edad.focus();
           return false;
       }

   return true;



}









/*
function Validar(){
    var a=document.getElementById("nom");
    var b=document.getElementById("email");
    var c=document.getElementById("pass");
    var d=document.getElementById("edad"); 
    var error=document.getElementById("error");
    error.style.color='red';

    var mensajesError=[];

    if(a.value===null || a.value===''){
        mensajesError.push('Ingrese su nombre');
    }

    if(b.value===null || b.value===''){
        mensajesError.push('Ingrese su correo electrónico');
    }

    if(c.value===null || c.value===''){
        mensajesError.push('Ingrese su password');
    }

    if(parseInt(d.value)===0 || d.value===''){
        mensajesError.push('Ingrese su edad');
    }
    error.innerHTML = mensajesError.join(',');
    return true;
}*/