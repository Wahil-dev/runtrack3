<?php
    require_once("inc/classes/User.php");
    require_once("inc/head.php");
    require_once("inc/header.php");
?>

    <div class="container">
        <section class="content flex-c">
            <h4>Bonjour<span id="username"></span>, </h4>
            <article class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore enim suscipit incidunt ducimus iste accusantium veritatis rerum velit nesciunt.
            </article>
            <?php if($user->isConnected()) :?>
                <div class="box-info flex-c">
                    <p class="info"><span>Nom :</span><?= $user->getUserName()?></p>
                    <p class="info"><span>Prenom :</span><?= $user->getPrenom()?></p>
                    <p class="info"><span>Email :</span><?= $user->getEmail()?></p>
                    <p class="info"><span>Password :</span><?= $user->getPassword()?></p>
                    <button class="delete-btn" id="delete">Supprimer</button>
                </div>
                <script type="module" src="assets/js/script.js"></script>
            <?php endif ?>
        </section>
    </div>

    <?php require_once("inc/footer.php"); ?>