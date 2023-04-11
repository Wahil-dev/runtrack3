<?php
    require_once("inc/head.php");
?>

    <div class="container flex-r">
        <form id="connexionForm" class="form">
            <input type='email' name="email" id="email" class="inp" placeholder="Email">
            <span class="err-msg">err</span>
            <input type='password' name="password" id="password" class="inp" placeholder="Password">
            <span class="err-msg">err</span>

            <button type="submit" id="connexion" class="btn">connexion</button>
        </form>
    </div>

    <?php require_once("inc/footer.php"); ?>