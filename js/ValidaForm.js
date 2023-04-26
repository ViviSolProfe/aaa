$(function() 
{
  $("#mi-Formulario").validate({
       rules: {
              nom: {
                  required:true,
              },
              email: {
                  required: true,
                  email: true
              },
              pass:{
                  required:true,
              },
              fono: {
                  required:true,
                  number:true
              },
              fecha: {
                  required:true,
                  
              },
              pass2: {
                  required: true,
                  equalTo: "#pass"
              }   
              
          }, //rules
      messages: {

          nom:{
              required: 'Ingrese nombre del usuario',
              minlength: 'Caracteres insuficientes'
          },
          email: {
              required: 'Ingresa tu correo electrónico',
              email: 'Formato de correo no válido'
          },
          pass: {
              required: 'Ingresa una contraseña',
              minlength: 'Caracteres insuficientes'
          },
          fono:{
              required: 'Ingrese un número de celular',
              minlength: 'Cantidad de digitos insuficiente'
          },
          fecha:{
              required: 'Seleccione una fecha válida',
              min: 'Fecha no corresponde'
          },
          pass2: {
              required: 'Reingresa la contraseña',
              equalTo: 'Las contraseñas ingresadas no coinciden',
              minlength: 'Caracteres insuficientes'

          }
      }//messages
  }); //$('#mi-formulario').validate
}); 