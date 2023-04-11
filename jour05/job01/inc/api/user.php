<?php
    require_once("../classes/User.php");

    if($user->isConnected()) {
        echo json_encode($user->getAllInfo());
    } else {
        echo json_encode("false");
    }