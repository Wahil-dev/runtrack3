<?php
    require_once("inc/head.php");
?>

    <div class="container flex-r">
        <form id="inscriptionForm" class="form">
            <input type='email' name="email" id="email" class="inp" placeholder="Email">
            <span class="err-msg">err</span>

            <input type='text' name="nom" id="nom" class="inp" placeholder="Nom">
            <span class="err-msg">err</span>
            

            <input type='text' name="prenom" id="prenom" class="inp" placeholder="Prenom">
            <span class="err-msg">err</span>
            
            <input type='password' name="password" id="password" class="inp" placeholder="Password">
            <span class="err-msg">err</span>

            <input type='password' name="cPassword" id="cPassword" class="inp" placeholder="confirm password">
            <span class="err-msg">err</span>

            <button type="submit" id="inscription" class="btn">inscription</button>
            <p class="box-msg">avez-vous déja un compte <a href="connexion.php">click</a></p>
        </form>
    </div>

    <?php require_once("inc/footer.php"); ?>