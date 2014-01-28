// Js de productos Modifica para Productos

//cargamos categorias y el modal del insert product
$(document).ready(function() {
    $.ajax({       
        dataType: 'json',
        url: 'usuarios.php',
        success: function(data) {
            datos = '<thead><tr><th>ID_Producto</th><th>Nombre</th><th>Precio</th><th>Vista Previa</th></tr></thead><tbody>';
            $.each(data, function(index) {
                datos += '<tr><td>' + data[index].id_usuario + '</td><td>' + data[index].nombre + '</td><td>' + data[index].apellidos + '</td><td><img src=../assets/img/' + data[index].id_usuario + '.jpg' + '></td><td><a href="javascript:button_modify(' + data[index].id_usuario + ')" id="form_insert"><i class="icon-edit"></i></a></td><td><a href="javascript:usuario_borrar(' + data[index].id_usuario + ')"><i class="icon-remove"></i></a></td></tr>';
            });
            datos += '</tbody></table></div>';
            $('#dataTable').html(datos);
        }
    });
    jQuery("#form_insert").click(function() {
        $("#dialog").css('visibility', 'visible');
        $("#dialog").dialog({
            modal: true,
            title: "Usuario nuevo",
            show: "blind",
            hide: "show",
            buttons: {
                'Save': function() {
                    var datos = $("#new_product_data").serialize();
                    $.ajax({
                        dataType: 'json',
                        url: 'usuario_nuevo.php',
                        type: 'POST',
                        data: datos,
                        success: function(data) {
                            alert("success");
                            usuarios();
                        }
                    });
                    $(this).dialog('close');
                    $("#collapse4").trigger("reloadGrid");
                },
                'Exit': function() {
                    //hacemos lo que se quiera y cerramos el dialog
                    $(this).dialog('close');
                }
            }
        });
    });
    $("#dialog").css('visibility', 'hidden');
    $("#dialog_modify").css('visibility', 'hidden');
});

//load products
function usuarios() {
    //alert("Pulsado " + categoria);
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'usuarios.php',
        success: function(data) {
            datos = '<thead><tr><th>ID_Producto</th><th>Nombre</th><th>Precio</th><th>Vista Previa</th></tr></thead><tbody>';
            $.each(data, function(index) {
                datos += '<tr><td>' + data[index].id_usuario + '</td><td>' + data[index].nombre + '</td><td>' + data[index].apellidos + '</td><td><img src=../assets/img/' + data[index].id_usuario + '.jpg' + '></td><td><a href="javascript:button_modify(' + data[index].id_usuario + ')" id="form_insert"><i class="icon-edit"></i></a></td><td><a href="javascript:usuario_borrar(' + data[index].id_usuario + ')"><i class="icon-remove"></i></a></td></tr>';
            });
            datos += '</tbody></table></div>';
            $('#dataTable').html(datos);
        }
    });
}
//update product: needed to do a function for modal hidden
function button_modify(id_usuario) {
    $("#dialog_modify").css('visibility', 'visible');
alert("id" + id_usuario)
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'usuario_modificar.php?id_usuario=' + id_usuario,
        success: function(data) {
            alert("succes")
            $.each(data, function(index) {
                $("#id_usuario").val(data[index].id_usuario);
                $("#nombre").val(data[index].nombre);
                $("#apellidos").val(data[index].apellidos);
                $("#password").val(data[index].password);
                $("#mail").val(data[index].mail);
                $("#codpos").val(data[index].codpost);
                $("#direccion").val(data[index].direccion);
                $("#ciudad").val(data[index].ciudad);
                $("#provincia").val(data[index].provincia);
                datos = data[index].id_usuario + data[index].nombre + data[index].apellidos + data[index].password + data[index].mail + data[index].codpost + data[index].direccion + data[index].ciudad + data[index].provincia;   
            });
        }
    });
    $("#dialog_modify").dialog({
        modal: true,
        title: "Modificar Usuario",
        show: "blind",
        hide: "show",
        buttons: {
            'Save': function() {
                var datos = $("#modify_product_data").serialize();
                $.ajax({
                    dataType: 'json',
                    url: 'articulo_guardar.php',
                    type: 'POST',
                    data: datos,
                    success: function(data) {
                        articulos(data);
                    }
                });
                $(this).dialog('close');
                $("#collapse4").trigger("reloadGrid");
            },
            'Exit': function() {
                //hacemos lo que se quiera y cerramos el dialog
                $(this).dialog('close');
            }
        }
    });
}

//delete user
function usuario_borrar(id_usuario) {
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'usuario_borrar.php?id_usuario=' + id_usuario,
        data: datos,
        success: function(data) {
            usuarios(data);
        }
    });
}