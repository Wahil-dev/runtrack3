<?php
    require_once("classes/User.php");
    require_once("classes/Auth.php");

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $jsonData = [];
        $email = $password = $cPassword = $nom = $prenom = "";
        $emailErr = $passwordErr = $cPasswordErr = $nomErr = $prenomErr = "";
        $inscriptionResponse = "";
    
        //__________________ Email vérification
        if(isset($_POST["email"]) && $_POST["email"] != "") {
            $email = Auth::process_input($_POST["email"]);
            if(Auth::is_valid_email($email)) {
                if(User::emailExist($email)) {
                    $emailErr = "email entrer déja utiliser !";
                    $email = "";
                }
            } else {
                $emailErr = "entrer un bon email !";
            }
        } else {
            $emailErr = "email obligatoire !";
        }
    
        //__________________ Nom vérification
        if(isset($_POST["nom"]) && $_POST["nom"] != "") {
            if(strlen(Auth::process_input($_POST["nom"])) > 3) {
                $nom = Auth::process_input($_POST["nom"]);
            } else {
                $nomErr = "min 3 caractere !";
            }
        } else {
            $nomErr = "nom obligatoire !";
        }
    
    
        //__________________ Prenom vérification
        if(isset($_POST["prenom"]) && $_POST["prenom"] != "") {
            if(strlen(Auth::process_input($_POST["prenom"])) > 3) {
                $prenom = Auth::process_input($_POST["prenom"]);
            } else {
                $prenomErr = "min 3 caractere !";
            }
        } else {
            $prenomErr = "prenom obligatoire !";
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
    
        //__________________ Confirm Password vérification
        if(isset($_POST["cPassword"]) && $_POST["cPassword"] != "") {
            if(Auth::process_input($_POST["cPassword"]) == $password) {
                $cPassword = Auth::process_input($_POST["cPassword"]);
            } else {
                $cPasswordErr = "confirm password != password";
            }
        } else {
            $cPasswordErr = "confirm password obligatoire !";
        }
    
        //__________________ Essay de inscription
        if(empty($emailErr) && empty($passwordErr) && empty($nomErr) && empty($prenomErr) && empty($cPasswordErr)) {
            if($user->register($nom, $prenom, $email, $password)) {
                $inscriptionResponse = "inscription réussie";
            } else {
                $inscriptionResponse = "erreur inscription !";
            }
            $jsonData[] = (object) [
                "inscriptionResponse" => $inscriptionResponse
            ];
        } else {
            array_push($jsonData, [
                "emailErr" => $emailErr, 
                "passwordErr" => $passwordErr,
                "cPasswordErr" => $cPasswordErr,
                "nomErr" => $nomErr,
                "prenomErr" => $prenomErr,
            ]);
        }
        echo json_encode($jsonData);

    } else {
        echo json_encode("submit error / n'est pas clicker !");
    }