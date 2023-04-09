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
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Sp. Attack</th>
                <th>Sp. Defense</th>
                <th>Speed</th>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
    </div>

    <script src="../../jquery.js"></script>
    <script src="script.js"></script>
</body>
</html>