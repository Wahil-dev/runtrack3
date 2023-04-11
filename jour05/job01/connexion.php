<?php
    require_once("inc/classes/User.php");
    require_once("inc/head.php");
    $user->redirectIfIsConnect();
?>

    <div class="container flex-r">
        <form id="connexionForm" class="form">
            <span class="err-msg" id="loginResponse"></span>

            <input type='email' name="email" id="email" class="inp" placeholder="Email" required>
            <span class="err-msg" id="emailErr"></span>

            <input type='password' name="password" id="password" class="inp" placeholder="Password" required>
            <span class="err-msg" id="passwordErr"></span>

            <button type="submit" id="connexion" class="btn">connexion</button>
            <p class="box-msg">voulez-vous inscrire <a href="inscription.php">click</a></p>
        </form>
    </div>

    <script type="module" src="assets/js/conn.js"></script>
