var api = new APISchema();

$("#registro").click(function(){
    //verificar()
    darDeAlta()
});

window.addEventListener('load', getProducts(),false);

function getProducts(){
 
  var tipo = $("#tipop").val();
  var cantidad = $("#cantidadp").val(); 
  var url = api.products;
  if(tipo != ''){
    url = url + '/' + tipo
  }
  else {
    url = url + '/0'
  }
  if(cantidad != ''){
    url = url + '/' + cantidad
  } else {
    url = url + '/50'
  }

  fetch(url,{
    method: 'Get',
  }).then(response => response.json()).then(data=>{
    if(data.length>0){
      $("#traemelo").empty();
      data.map(product => {
        $("#traemelo").append(
          '<tr>'+
          '<td>'+ product.PD_ID + '</td>'+
          '<td>'+ product.PDT_ID + '</td>'+
          '<td>'+ product.PD_name + '</td>'+
          '<td>'+ product.PD_price + '</td>'+
          '<td>'+ '<button id="borrar" class="btn-small red" style="width:60%; " onclick= deleteProduct('+product.PD_ID+') >Borrar</button>' + '</td>'+
          '</tr>'
        );
      })
      
    };
  })
}

function deleteProduct(id){
  fetch((api.products+'/'+id),{
    method: 'Delete',
  }).then(response => response.json()).then(data=>{
    getProducts();
})}

//Funcion para hacer registro en firebase
function darDeAlta(){
  //var contrasena = this.pass;
  //var correo = this.email;  
  var id = $("#tipo").val();  
  var nombre = $("#nombre").val();
  var precio = $("#precio").val();
  if( id === "" || nombre === "" || precio ===""){
      M.toast({html: 'No se permiten campos vacios!'})

  } else {

      /* firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var uid = user.uid; */
        
       
        //M.toas({html: '' + uid});
        //aqui estamos usando la instancia
        fetch(api.products,{
          method: 'POST',
          body: JSON.stringify({
              id: id,
              nombre: nombre,
              precio: precio
          }),
          headers:{
            "Content-type":"application/json"
          }
        })
        .then(response => 
          {response.json();
          getProducts();
          })
        /* .then(data => {
          M.toast({html:'Se a subido al sistema'});
          //window.location = '?view=home';
          
        }) */
        .catch(err => {
          console.log(err);
        });
        //window.location = '?view=home';
        // ...
      
  }
}


