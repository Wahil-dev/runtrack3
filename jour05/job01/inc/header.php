<?php require_once("inc/classes/User.php"); ?>

<header id="header" class="flex-r">
    <h1>Job01->jour05</h1>
    <?php if(isset($_SESSION["id"])) : ?>
        <p class="">Bonjour <?= $user->getUserName()?></p>
        <nav class="nav">
            <ul class="menu">
                <button id="disconnect">déconnexion</button>
            </ul>
        </nav>
    <?php else : ?>
        <nav class="nav">
            <ul class="menu">
                <li><a href="connexion.php">connexion</a></li>
                <li><a href="inscription.php">inscription</a></li>
            </ul>
        </nav>
    <?php endif ?>
</header>