<?php include('connection.php') ?>

<?php
    $newsId = $_GET['newsId'];

    $qry = "SELECT * FROM news_reports WHERE `id` = '$newsId'";

    $raw=mysqli_query($conn,$qry);
    $data = array();

    while($res=mysqli_fetch_assoc($raw))
    {
        $data=$res;
    }

    if(empty($data)){
        echo 'No results found';
    }
    else{
        print(json_encode($data));
    }
?>