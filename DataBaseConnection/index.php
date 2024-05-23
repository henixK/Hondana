
<?php



function connessioneDB () {
    // api.php
    header('Content-Type: application/json');
    
    $data = [
        "message" => "Ciao dal server PHP!",
        "success" => true
    ];
    
    echo json_encode($data);
}

?>
