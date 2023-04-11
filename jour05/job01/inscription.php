<?php
    require_once("inc/classes/User.php");
    require_once("inc/head.php");
    $user->redirectIfIsConnect();
?>

    <div class="container flex-r">
        <form id="inscriptionForm" class="form">
            <span class="err-msg" id="inscriptionResponse"></span>

            <input type='email' name="email" id="email" class="inp" placeholder="Email" required>
            <span class="err-msg" id="emailErr"></span>

            <input type='text' name="nom" id="nom" class="inp" placeholder="Nom" required>
            <span class="err-msg" id="nomErr"></span>
            

            <input type='text' name="prenom" id="prenom" class="inp" placeholder="Prenom" required>
            <span class="err-msg" id="prenomErr"></span>
            
            <input type='password' name="password" id="password" class="inp" placeholder="Password" required>
            <span class="err-msg" id="passwordErr"></span>

            <input type='password' name="cPassword" id="cPassword" class="inp" placeholder="confirm password" required>
            <span class="err-msg" id="cPasswordErr"></span>

            <button type="submit" id="inscription" class="btn">inscription</button>
            <p class="box-msg">avez-vous déja un compte <a href="connexion.php">click</a></p>
        </form>
    </div>

    <script type="module" src="assets/js/inscr.js"></script>
