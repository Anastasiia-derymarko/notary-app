<?php
    require './nameCase/NCLNameCaseUa.php';


    function name_case($name){
        $nc = new NCLNameCaseUa();

        return $nc->q($name);
    }

    function name_gender($name) {
        $nc = new NCLNameCaseUa();

        return $nc->genderDetect($name);
    }
