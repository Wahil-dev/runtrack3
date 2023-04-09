<?php 
    if(!session_id()) {
        session_start();
    }
    require_once("DbConn.php");
    $db = (new DbConn())::getConn();

    class User {
        const TABLE_NAME = "utilisateurs";
        private $tb_name = "utilisateurs";
        private $user_info = [];
        private $isConnected = false;
        
        public function __construct()
        {
            var_dump(self::getUserById(35));
            if(isset($_SESSION["id"])) {
                $this->user_info = self::getUserById($_SESSION["id"]);
            }
        }

        public function connect($email, $password) {
            global $db;
            $sql = "SELECT * FROM ".$this->tb_name . " WHERE email = ? && password = ?";
            $req = $db->prepare($sql);
            $req->execute([$email, $password]);
            //check if user exist
            if($req->rowCount() == 1) {
                $res = $req->fetchObject();
                $this->user_info = $res;
                $_SESSION["id"] = $res->id;
                return true;
            }
            return false;
        }


        public function getUserName() {
            return $this->user_info->nom;
        }



        /* --------------------- Static Methods --------------------- */
        private static function getUserById($id) {
            global $db;
            $sql = "SELECT * FROM " . self::TABLE_NAME . " WHERE id = ?";
            $req = $db->prepare($sql);
            $req->execute([$id]);
            $res = $req->fetchObject();

            return $res;
        }
    }

    $user = new User();

    $email = "wahil@gmail.com";
    $password = "bvb";
    var_dump($user->connect($email, $password));