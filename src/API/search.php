<?php include('connection.php') ?>

<?php
    $search = $_GET['search'];
    $target = $_GET['target'];

    if($target == 'notice'){
        $qry = "SELECT * FROM notice_board WHERE `id` = '$search' OR `title` = '$search' OR `date` = '$search'";
    }elseif($target == 'civil'){
        $qry = "SELECT * FROM case_summery WHERE `caseType` = 'Civil' AND `caseTitle` = '$search' OR `plaintiffName` = '$search' OR `diffendentName` = '$search' OR `courtName` = '$search' OR `judgeName` = '$search'";
    }elseif($target == 'criminal'){
        $qry = "SELECT * FROM case_summery WHERE `caseType` = 'Criminal' AND `caseTitle` = '$search' OR `plaintiffName` = '$search' OR `diffendentName` = '$search' OR `courtName` = '$search' OR `judgeName` = '$search'";
    }

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