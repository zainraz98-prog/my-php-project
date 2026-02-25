<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$response = [
    "status" => "success",
    "message" => "Hello from PHP on Vercel!",
    "time" => date('Y-m-d H:i:s')
];

echo json_encode($response);