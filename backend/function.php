<?php
function connect(){
    $conn = mysqli_connect("127.0.0.1", "root", "root", "notaryapp");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function itemsList($type, $params = []){
    $conn = connect();
    $sql = "SELECT * FROM $type";

    if ($params) {
        $where = [];

        foreach ($params as $p => $value) {
            $where[] = "$p = $value";
        }

        $sql .= ' WHERE ' . implode(' AND ', $where);
    }

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function streets($type, $column, $number_strings){

    $conn = connect();
    $sql = "SELECT * FROM $type WHERE $column = $number_strings";

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function search($type, $city, $search_q){
    $search_q = trim($search_q);
    $search_q = strip_tags($search_q);

    $conn = connect();
    $sql = "SELECT * FROM $type WHERE City = $city AND Street LIKE '%$search_q%'" ;

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;

        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function addAgreement ($type, $object, $date, $number, $nameNotary){
    $conn = connect();
    $sql = "INSERT INTO main_parameters_agreement (type, object, date, number, nameNotary) VALUES ($type, $object, $date, $number, $nameNotary)";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0){
        echo 'OK';
    } else {
        echo 'err';
    }
    mysqli_close($conn);
}