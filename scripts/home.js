// Detectar sesión activa
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;

    } else {
        window.location = "?view=login";
    }
});

$("#cerrar").click(function(){
    //verificar()
    signOut();
});

// Cerrar sesión
function signOut(){
    firebase.auth().signOut().then(function() {
        window.location = "?view=login";
    }).catch(function(error){
    
    });
}
