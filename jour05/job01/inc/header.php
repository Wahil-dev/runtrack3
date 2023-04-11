<?php require_once("inc/classes/User.php"); ?>


<header id="header" class="flex-r">
    <div class="container-header flex-r">
        <h3>Job01->jour05</h3>
        <?php if(isset($_SESSION["id"])) : ?>
            <nav class="nav">
                <ul class="menu">
                    <li><a href="inc/disconnect.php">déconnexion</a></li>
                </ul>
            </nav>
        <?php else : ?>
            <nav class="nav">
                <ul class="menu flex-r">
                    <li><a href="connexion.php">connexion</a></li>
                    <li><a href="inscription.php">inscription</a></li>
                </ul>
            </nav>
        <?php endif ?>
    </div>
</header>