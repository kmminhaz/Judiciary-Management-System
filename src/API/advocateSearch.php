<?php include('connection.php') ?>

<?php
    $search = $_GET['search'];

    $qry = "SELECT * FROM advocate_profile WHERE `full_name` = '$search' OR `phoneNo` = '$search' OR `chember` = '$search'";

    $raw=mysqli_query($conn,$qry);
    $data = array();

    while($res=mysqli_fetch_assoc($raw))
    {
        $data[]=$res;
    }

    if(empty($data)){
        echo 'No results found';
    }
    else{
        print(json_encode($data));
    }
?>