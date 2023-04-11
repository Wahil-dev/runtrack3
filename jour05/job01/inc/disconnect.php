<?php 
    require_once("classes/User.php");
    if($user->isConnected()) {
        $user->disconnect();
        header("location: " . "../index.php");
        exit();
    } else {
        header("location: " . "../index.php");
        exit();
    }

