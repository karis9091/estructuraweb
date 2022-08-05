var api = new APISchema();
//Evento para el registro de usuarios
$("#registro").click(function(){
    //verificar()
    signup()
});

//Funcion para validar contraseñas
function verificar(pass) {
  var pass = $("#contrasena").val();
  var email = $("#correo").val();
  
  var newPassword = pass
  var minNumberofChars = 8;
  var maxNumberofChars = 16;
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
//   !!24Marzo!!

  if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
      M.toast({html: 'La contraseña debe ser de entre 8 y 16 caracteres'});
      return false;
  }
  if(!regularExpression.test(newPassword)) {
      M.toast({html: 'Introdusca una contraseña valida'});
      return false;
  } else{
      M.toast({html: 'Buena contraseña'});
      signup(pass, email); 
  }
}

//Funcion para hacer registro en firebase
function signup(){
    //var contrasena = this.pass;
    //var correo = this.email;  
    var email = $("#correo").val();
    var pass = $("#contrasena").val();  
    var name = $("#name").val();
    if( email === "" || pass === ""){
        M.toast({html: 'No se permiten campos vacios!'})

    } else {

        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          var uid = user.uid;
          
         
          //M.toas({html: '' + uid});
          //aqui estamos usando la instancia
          fetch(api.users,{
            method: 'POST',
            body: JSON.stringify({
              US_name: name,
              US_email: email,
              UID: uid,
            }),
            headers:{
              "Content-type":"application/json"
            }
          })
          .then(response => response.json())
          .then(data => {
            M.toast({html:'bienvenido'});
            window.location = '?view=home';
            
          })
          .catch(err => {
            console.log(err);
          });
          //window.location = '?view=home';
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

//Metodo para redirecionar al login
$("#login").click(function(){
  redirect()
});


function redirect(){  
  window.location = "?view=login";
}
