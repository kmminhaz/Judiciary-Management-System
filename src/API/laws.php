<?php include('connection.php') ?>

<?php
    $qry = "SELECT * FROM laws_link";
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