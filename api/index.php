<?php
header('Content-Type: application/json');

// This proves the backend is processing logic
$serverName = $_SERVER['SERVER_SOFTWARE'] ?? 'Vercel Serverless (PHP)';
$randomNumber = rand(100, 999);
$date = new DateTime();

echo json_encode([
    "confirmation" => "Backend Connection Verified!",
    "runtime" => $serverName,
    "lucky_number" => $randomNumber,
    "server_time" => $date->format('H:i:s T')
]);