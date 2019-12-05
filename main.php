<?php

include_once "connection.php";

if ($_SERVER['REQUEST_METHOD'] == "POST"){


    $name = $_POST['name'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $number = $_POST['number'];


    $sql = "INSERT INTO moments.db_moments (id, name, lastName, email, number) VALUES (NULL, '$name', '$lastName', '$email', '$number')";

    if ($name == '' || $number == ''){
        echo 'Заполните все поля!';
    }else{
        $link = mysqli_connect($host, $user, $pass, $database);
        mysqli_set_charset($link, "utf8");
        $result = mysqli_query($link, $sql);
        mysqli_close($link);
        echo 'все успешно!';
    }



}

