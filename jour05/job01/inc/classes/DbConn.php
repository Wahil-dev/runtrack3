<?php
    class DbConn {
        const HOST = "localhost";
        const DB_NAME =  "utilisateurs";
        const USER_NAME =  "root";
        const PASSWORD =  "";

        static public function getConn() {
            try {
                $options = [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES   => false,];
                $conn = new PDO("mysql:host=" . self::HOST . "; dbname=" . self::DB_NAME, self::USER_NAME, self::PASSWORD, $options);
                return $conn;

            } catch(PDOException $e) {
                echo "Error connection : " . $e->getMessage();
                die();
            }
        }
    }
