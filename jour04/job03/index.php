<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job01</title>
</head>
<body>

    <div class="contaienr">
        <form id="form">
            <input type="text" id="id" name="name">
            <input type="text" id="nom" name="name">
            <select name="type" id="type">
                <option value="" default>choisi un type</option>
            </select>

            <button id="filtrer">filtrer</button>
        </form>

        <table class="result" border="2px">
            <thead>
                <tr>ID</tr>
                <tr>Name</tr>
                <tr>Type</tr>
                <tr>Attack</tr>
                <tr>Defense</tr>
                <tr>Sp. Attack</tr>
                <tr>Sp. Defense</tr>
                <tr>Speed</tr>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
    </div>

    <script src="../../jquery.js"></script>
    <script src="script.js"></script>
</body>
</html>