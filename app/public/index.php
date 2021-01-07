<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <?php
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();

        if (isset($_POST['username'])) {

            $_SESSION['username'] = $_POST['username'];
        }

        if (!isset($_SESSION['username'])) {
            echo 
            '<form action="'.$_SERVER['PHP_SELF'].'" method="post">
                <input type="text" name="username" id="inputUser" placeholder="Nome...">
                <input type="submit" value="Enviar">
            </form>';
        }

        

        session_destroy();

        echo  $_SESSION['username'];
    ?>

    <div class="chat">
        
    </div>
</body>
</html>