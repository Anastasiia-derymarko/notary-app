<?php

require_once 'function.php';
require './NameCaseLib/NCLNameCaseUa.php';


$payload = file_get_contents('php://input');

if (!empty($payload)) {
 $payload = json_decode($payload, true);
}

function payloadFun ($payload, $name) {
    return isset($payload[$name]) ? $payload[$name] : '';
}

$action = isset($payload['action']) ? $payload['action'] : '';
$column = isset($payload['column']) ? $payload['column'] : '';
$city = isset($payload['city']) ? $payload['city'] : '';
$number_strings = isset($payload['number_strings']) ? $payload['number_strings'] : '';
$search_q = isset($payload['search_q']) ? $payload['search_q'] : '';

$name = payloadFun($payload, 'name');

$type = payloadFun($payload,'type');
$object = payloadFun($payload,'object');
$date = payloadFun($payload,'date');
$number = payloadFun($payload,'number');
$nameNotary = payloadFun($payload,'nameNotary');


header('Access-Control-Allow-Origin: *');

switch ($action) {
    case 'region':
        header('Content-Type: application/json');
        itemsList($action);
        break;
    case 'area':         
    case 'city':
        streets($action,$column, $number_strings);
        break; 
    case 'streets_test':
        search($action,$city, $search_q);    
        break; 
    case 'NameCase':
        $nc = new NCLNameCaseUa();
        echo json_encode(['name' => $nc->q($name)]);
        break;
    case 'gender':
        $nc = new NCLNameCaseUa();
        echo json_encode(['gender' => $nc->genderDetect($name)]);
        break;
    case 'addAgreement':
        echo addAgreement($type, $object, $date, $number, $nameNotary);
        break;
    default:
      echo 'Should specify API';
      break;    
}




						