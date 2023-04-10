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
        private $db;
        
        public function __construct()
        {
            global $db;
            $this->db = $db;
            if(isset($_SESSION["id"])) {
                $this->user_info = self::getUserById($_SESSION["id"]);
                $this->isConnected = true;
            }
        }

        public function connect($email, $password) {
            $sql = "SELECT * FROM ".$this->tb_name . " WHERE email = ? && password = ?";
            $req = $this->db->prepare($sql);
            $req->execute([$email, $password]);
            //check if user exist
            if($req->rowCount() == 1) {
                $res = $req->fetchObject();
                $this->user_info = $res;
                $_SESSION["id"] = $res->id;
                $this->isConnected = true;
                return true;
            }
            return false;
        }

        public function register($nom, $prenom, $email, $password) {
            $sql = "INSERT INTO ".$this->tb_name."(nom, prenom, email, password) VALUES(?, ?, ?, ?)";
            $req = $this->db->prepare($sql);
            $req->execute([$nom, $prenom, $email, $password]);
            return $req->rowCount();
        }


        public function getAllInfo() {
            return $this->user_info;
        }

        public function getUserId() {
            return $this->user_info->id;
        }

        public function getUserName() {
            return $this->user_info->nom;
        }

        public function setUserName($new_username) {
            $user_id = $this->getUserId();
            $sql = "UPDATE " . $this->tb_name . " SET nom = ? WHERE id = ?";
            $req = $this->db->prepare($sql);
            $req->execute([$new_username, $user_id]);
            if($req) {
                return true;
            }
            return false;
        }

        public function getEmail() {
            return $this->user_info->email;
        }

        public function setEmail($new_email) {
            $user_id = $this->getUserId();
            $sql = "UPDATE " . $this->tb_name . " SET email = ? WHERE id = ?";
            $req = $this->db->prepare($sql);
            $req->execute([$new_email, $user_id]);
            if($req) {
                return true;
            }
            return false;
        }

        public function getPassword() {
            return $this->user_info->password;
        }

        public function setPassword($new_password) {
            $user_id = $this->getUserId();
            $sql = "UPDATE " . $this->tb_name . " SET password = ? WHERE id = ?";
            $req = $this->db->prepare($sql);
            $req->execute([$new_password, $user_id]);
            if($req) {
                return true;
            }
            return false;
        }

        public function getName() {
            return $this->user_info->nom;
        }

        public function setName($new_name) {
            $user_id = $this->getUserId();
            $sql = "UPDATE " . $this->tb_name . " SET nom = ? WHERE id = ?";
            $req = $this->db->prepare($sql);
            $req->execute([$new_name, $user_id]);
            if($req) {
                return true;
            }
            return false;
        }

        public function getPrenom() {
            return $this->user_info->prenom;
        }

        public function setPrenom($new_prenom) {
            $user_id = $this->getUserId();
            $sql = "UPDATE " . $this->tb_name . " SET prenom = ? WHERE id = ?";
            $req = $this->db->prepare($sql);
            $req->execute([$new_prenom, $user_id]);
            if($req) {
                return true;
            }
            return false;
        }

        public function isConnected()
        {
            return $this->isConnected;
        }

        public function setIsConnected($isConnected): self
        {
            $this->isConnected = $isConnected;
            return $this;
        }


        /* --------------------- Static Methods --------------------- */
        private static function getUserById($id)
        {
            global $db;
            $sql = "SELECT * FROM " . self::TABLE_NAME . " WHERE id = ?";
            $req = $db->prepare($sql);
            $req->execute([$id]);
            $res = $req->fetchObject();

            return $res;
        }

        private static function emailExist($email) {
            global $db;
            $sql = "SELECT * FROM ". self::TABLE_NAME ." WHERE email = ?";
            $req = $db->prepare($sql);
            $req->execute([$email]);
            //check if email exist
            if($req->rowCount()) {
                return true;
            }
            return false;
        }
    }

    $user = new User();

    $email = "s@gmail.com";
    $password = "bvb";
    $nom = "bvb";
    $prenom = "bvbbvb";
    //unset($_SESSION["id"]);
    //unset($_SESSION["emailErr"]);
    //var_dump($_SESSION);
    $user->connect($email, $password);
    //$user->setUserName("chettouf");

    //var_dump($user->register($nom, $prenom, $email, $password));

    if($user->isConnected()) {
        var_dump($user->getAllInfo());
        //$user->setEmail("s@gmail.com");
    } else {
        var_dump("vous etez pas connecter");
    }