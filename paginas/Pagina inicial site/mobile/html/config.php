<?php

$dbHost = "Localhost";
$dbUsername = "root";
$dbPassword = "22257800";
$dbName = "formulario_passatempo";

    $conexao= new mysqli($dbhost,$dbUsername,$dbPassword,$dbName)

    if($conexao->connect_errno)
    {
        echo "Erro";

    }
    else
    {
        echo "Conexão efetuada com sucesso"
    }


?>