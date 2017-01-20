<!DOCTYPE html>
<html>
<body>



<?php

/*
$myfile = fopen("command.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);


fclose($myfile);

*/

// isset checks whter the varaible is set Post is used to collect for-data

if(isset($_POST['start']))
{
    
    $file = fopen("command.txt","w") or die("Unable to open file!");
$txt = "Start\n";
    fwrite($file,$txt);
    fclose($file); 
  
}

else if(isset($_POST['stop']))
{
    
    $file = fopen("command.txt","w") or die("Unable to open file!");
$txt = "Stop\n";
    fwrite($file,$txt);
    fclose($file); 
  
}


?>




<form action="" method="post" name="form">
<br>

<input type="submit" name="start" value="start"><br>
<input type="submit" name="stop" value="stop"><br>
</form>




