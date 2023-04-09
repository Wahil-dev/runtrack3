<?php
    define("HOST", "localhost");
    define("DB_NAME", "utilisateurs");
    define("USER_NAME", "root");
    define("PASSWORD", "");

    $conn = getConn();
    $tb_name = "utilisateurs";

    function getConn() {
        try {
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,];
            $conn = new PDO("mysql:host=" . HOST . "; dbname=" . DB_NAME, USER_NAME, PASSWORD, $options);
            return $conn;
        } catch(PDOException $e) {
            echo "Error connection : " . $e->getMessage();
            die();
            
        }
    }

    function getUsers() {
        global $tb_name, $conn;
        $sql = "SELECT * from " . $tb_name;
        $query = $conn->prepare($sql);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    echo json_encode(getUsers());

    $conn = null;