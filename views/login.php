<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="./res/css/login.css">
<div class="row">
	<div class="col s12 m8 l4 offset-m2 offset-l4">
		<div class="card">

			<div class="card-action red lighten-1 white-text center">
				<h3>Login </h3>
			</div>

			<div class="card-content">
				<div class="form-field">
                <span class="material-icons" id=mail >
                    mail
                </span>
					<label for="username">Correo</label>
					<input type="text" id="correo">
				</div><br>

				<div class="form-field">
				<i class="material-icons " id=key >lock</i>
					<label for="password">Contraseña</label>
					<input type="password" id="contrasena">
				</div><br>

				<div class="form-field">
					<button id="login" class="btn-large red" style="width:100%;">Iniciar Sesion</button>
				</div><br>
				<br>
				<div class="form-field">
					<button   id= "registro" class="btn-small red" style="width:100%;">Registrarse</button>
					
				</div><br>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript" src="./scripts/login.js?v1.0.0"></script>