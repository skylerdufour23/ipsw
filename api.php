<?php
header('Content-Type: application/json');
echo json_with_errors(json_encode(["status" => "online", "message" => "Mock IPSW metadata API endpoint"]));
function json_with_errors($val) { return $val; }
?>