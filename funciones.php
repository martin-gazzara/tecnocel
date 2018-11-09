<? 
$IP = $_SERVER['REMOTE_ADDR'];
// conexion sql //
$con = mysql_connect('tecnocel.com.ar', 'tecnocel', 'in2005fo');
mysql_select_db("tecnocel", $con);
// conexion sql //

function cabeza() { 

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>TECNOCEL - Accesorios para telefonía celular</title>
<link rel="stylesheet" href="styles/mainstyle.css" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
	<div id="banner">

       		 <img src="images/logo.png" width="1280px"/>
	
	</div>

    	<div id="bar">
	    	
		<ul>
        	    	<a href="index.php"><li id="begin" onclick="select_start()">INICIO</li></a>
            		<a href="catalog.php"><li>CAT&Aacute;LOGO</li></a>
	            	<a href="company.php"><li>EMPRESA</li></a>
            		<a href="contact.php"><li id="end" >CONTACTO</li></a>
        	</ul>
	</div>

<? } ?>


<? function pie() {
echo "

</body>
</html>";
myqsl_close($con); // cerrar conexion sql
} ?>