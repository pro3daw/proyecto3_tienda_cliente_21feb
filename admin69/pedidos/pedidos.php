<?php
$db = mysql_connect("localhost", "root", "frodo2013") or die("Connection Error: " . mysql_error());
mysql_select_db("proyecto3_tienda") or die("Error conecting to db.");

$SQL = "SELECT * from pedidos;";
$result = mysql_query($SQL) or die("Couldn t execute query." . mysql_error());
//$datos[];
$i = 0;
while ($fila = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $datos[$i] = array('id_pedido' => $fila["id_pedido"],
        'id_usuario' => $fila["id_usuario"],
        'estado_envio' => $fila["estado_envio"],
        'precio_pedido' => $fila["precio_pedido"]);
    // son los datos que cojo de la bbdd 
    $i++;
}

header('Content-type: application/json');
echo json_encode($datos);
?>
