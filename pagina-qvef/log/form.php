<?php
	$nombre= $_POST["nombre"];
	$apellido = $_POST["apellido"];
	$email = $_POST["email"];
	$direccion = $_POST["direccion"];
    $contrasena = $_POST["contrasena"];
    $telefono = $_POST["telefono"];

    $servername = "127.0.0.1";
    $database = "pagina";
    $username = "alumno";
    $password = "alumnoipm";
    
    $conexion = mysqli_connect($servername, $username, $password, $database); // se crea la conexion


    if (!$conexion) {
        die("Conexion fallida: " . mysqli_connect_error());
    }
    else{
        //insertamos el resultado del formulario

        $consulta = "select email from usuario where email = '$email'";
        $resultado = mysqli_query($conexion, $consulta);

        if($mysql_row_number($resultado) > 0){
            echo "el email ingresado esta repetido, porfavor ingrese uno nuevo";
        }
        else{
            $query = "insert into usuario values(null,'$email','$nombre', '$apellido','$direccion','$contrasena','$telefono');";
            $resultado=mysqli_query($conexion, $query);
    
    
            $resultados = mysqli_query($conexion,"select * from usuario;");
    
        }
        mysqli_close($conexion);
    }

    ?>