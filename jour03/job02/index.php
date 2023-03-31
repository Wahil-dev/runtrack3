<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job01</title>
    <style>

        .error-game {
            color: red;
            display: none;
        }

        .flex-r {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
        }
        .container-game {
            width: 100%;
            height: 200px;
            border: 2px solid black;
            margin: auto;
        }

        .container-game img {
            position: relative;
            width: 50px;
            z-index: -1;
        }

        .container-imgs {
            width: 100%;
            height: 200px;
            border: 2px solid black;
        }

        .container-imgs .img-box {
            width: 80px;
        }

        .imgs img {
            width: 60px;
            padding: 0 2px;
        }


    </style>
</head>
<body id="body">
    <div class="container">
        <button id="melanger">melanger</button>
        <button id="reset">reset</button>
        <span class="error-game">Il faut mélanger les images pour commancer le partie !!!</span>
        <div class="container-game"></div>
    
        <div class="imgs flex-r">
            <img src="img/arc1.png" id="1" alt="">
            <img src="img/arc2.png" id="2" alt="">
            <img src="img/arc3.png" id="3" alt="">
            <img src="img/arc4.png" id="4" alt="">
            <img src="img/arc5.png" id="5" alt="">
            <img src="img/arc6.png" id="6" alt="">
        </div>
    </div>

    <script src="../../jquery.js"></script>
    <script src="script.js"></script>
</body>
</html>