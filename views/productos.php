<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/products.css">

<div class="row">
    

    <div class="col-sm-4 p-3 bg text-white">
		<div class="card">

			<div class="card-action red lighten-1 white-text center">
				<h3>Productos </h3>
			</div>

			<div class="card-content">
                <div class="form-field">
				
					<label for="precio">Tipo</label>
					<input type="text" id="tipo">
				</div>

				<div class="form-field">
                
					<label for="nombre">Nombre</label>
					<input type="text" id="nombre">
				</div>

				
				<div class="form-field">
				
					<label for="precio">Precio</label>
					<input type="text" id="precio">
				</div>
                
                <br>

				<div class="form-field">
					<button id="registro" class="btn-large red" style="width:100%;">Registrar</button>
				</div><br>
				
				<!-- <div class="form-field">
					<button id="login" class="btn-small red" style="width:100%;">Iniciar Sesion</button>
				</div> -->
			</div>

		</div>
	</div>
    
    
    <div class="col-sm-8 p-3 bg text-white" >
		<div class="card">

			<div class="card-action red lighten-1 white-text center">
				<h3>Productos Existentes</h3>
			</div>

			<div class="card-content">
            <div class="input">
                <input type="text" class="form-control" id="tipop" placeholder="Ingrese el tipo de producto">
            <div class="input">
                <input type="text" class="form-control" id="cantidadp" placeholder="Ingrese la cantidad de numeros a visualizar">
            </div>
            
            <button type="button" class="btn-small red" id="buscar"  onclick="getProducts()" style="width:30%;">Buscar</button>
            
            
            <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody id = "traemelo">
                <tr>
                    <td id= "id" >12345</td>
                    <td id= "tipo" >2</td>
                    <td id= "nombre" >Zapato Patito</td>
                    <td id= "precio" >1234</td>
                    <td><button id="borrar" class="btn-small red" style="width:60%;">Borrar</button></td>
                </tr>
            </tbody>          
        </table>
        
			</div>
		</div>
	</div>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./scripts/productos.js?v1.0.0"></script>