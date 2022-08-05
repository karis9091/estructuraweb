
//Evento para el registro de usuarios
$("#login").click(function(){
  login();
});

//pendiente de revisar

function login(){
  var password = $("#contrasena").val();
  var email = $("#correo").val();   

  if( email === "" || password === ""){
      M.toast({html: 'No se permiten campos vacios!'})
  } else {
      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Loged In
        M.toast({html: 'se inicio sesion correctamente'})
        window.location = "?view=home";
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        M.toast({html: errorCode + ' - '+ errorMessage});
        // ..
      });
  }
}

 //Metodo para redirecionar al registro
$("#registro").click(function(){
    redirect()
});

function redirect(){  
  window.location = "?view=sighnup";
  
} 