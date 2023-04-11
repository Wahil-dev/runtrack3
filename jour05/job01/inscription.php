<?php
    require_once("inc/head.php");
?>

    <div class="container flex-r">
        <form id="inscriptionForm" class="form">
            <span class="err-msg" id="inscriptionResponse"></span>

            <input type='email' name="email" id="email" class="inp" placeholder="Email">
            <span class="err-msg" id="emailErr"></span>

            <input type='text' name="nom" id="nom" class="inp" placeholder="Nom">
            <span class="err-msg" id="nomErr"></span>
            

            <input type='text' name="prenom" id="prenom" class="inp" placeholder="Prenom">
            <span class="err-msg" id="prenomErr"></span>
            
            <input type='password' name="password" id="password" class="inp" placeholder="Password">
            <span class="err-msg" id="passwordErr"></span>

            <input type='password' name="cPassword" id="cPassword" class="inp" placeholder="confirm password">
            <span class="err-msg" id="cPasswordErr"></span>

            <button type="submit" id="inscription" class="btn">inscription</button>
            <p class="box-msg">avez-vous déja un compte <a href="connexion.php">click</a></p>
        </form>
    </div>

    <script src="assets/js/inscr.js"></script>
    <?php require_once("inc/footer.php"); ?>