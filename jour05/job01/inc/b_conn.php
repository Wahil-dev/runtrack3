<?php
    require_once("classes/User.php");
    require_once("classes/Auth.php");

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $jsonData = [];
        $email = $password = "";
        $emaiErr = $passwordErr = "";
        $loginResponse = "";
    
        //__________________ Email vérification
        if(isset($_POST["email"]) && $_POST["email"] != "") {
            if(Auth::process_input($_POST["email"])) {
                $email = Auth::process_input($_POST["email"]);
            } else {
                $emaiErr = "entrer un bon email !";
            }
        } else {
            $emaiErr = "email obligatoire !";
        }
    
        //__________________ Password vérification
        if(isset($_POST["password"]) && $_POST["password"] != "") {
            if(Auth::is_valid_password($_POST["password"])) {
                $password = Auth::process_input($_POST["password"]);
            } else {
                $passwordErr = "8 caractere, 1 chifre, maj, min";
            }
        } else {
            $passwordErr = "password obligatoire !";
        }
    
        //__________________ Essay de connexion
        if(empty($emaiErr) && empty($passwordErr)) {
            if($user->connect($email, $password)) {
                $loginResponse = "connecter réussi";
            } else {
                $loginResponse = "information entrer ne trouve pas dans notre base de donnes";
            }
            $jsonData[] = (object) [
                "loginResponse" => $loginResponse
            ];
        } else {
            $jsonData[] = (object) [
                "emaiErr" => $emaiErr,
                "passwordErr" => $passwordErr,
            ];
        }
    
        echo json_encode($jsonData);
    } else {
        echo json_encode("submit error / n'est pas clicker !");
    }