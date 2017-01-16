<!DOCTYPE html>
<html lang="en">
<head>
 <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>


<style>
body {
    margin: 0;
    padding: 0;
}

.container {
    position: relative;
    width: 100%;
}

.right {
    position: absolute;
    right: 0px;
    width: 300px;
    
}

{
   background-color: white;
}

h3 {
    color: blue;
}

h1 {
	color: red;

}

<h3>Current time</h3>
<p id="demo"></p>
</style>
</head>

<script>


var myVar = setInterval(currenttime, 1000);// set

function currenttime() {
var d = new Date();

    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }
 </script>

<div class="container">
  <div class="right">
<h1>Speed</h1>
 
 
 
<p id="deo"></p>

<script>

var my = setInterval(speed, 1000);

function speed() {
var x = document.getElementById("deo")

    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " m/s";
}
</script>





<h3>temperature </h3>
<p id="d"></p>

<script>
var my = setInterval(temperature, 1000);
function temperature ()
{
var x = document.getElementById("d")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " T";


}
</script>

<h1>Acceleratiion</h1>
<p id="ACC"></p>
<script>
var my = setInterval(Acceleration, 1000);

function Acceleration()
{
var x = document.getElementById("ACC")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " m/s^2";
}

</script>

<h1>position</h1>

<p id="POS"></p>
<script>

var my = setInterval(Position, 1000);

function Position()
{
var x = document.getElementById("POS")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " m";
}
</script>

<h3>voltage</h3>
<p id="Volt"></p>
<script>
var my = setInterval(Voltage, 1000);

function Voltage()
{
var x = document.getElementById("Volt")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " V";
}

</script>

<h3>Current</h3>
<p id="curr"></p>
<script>
var my = setInterval(Current, 1000);
function Current()
{
var x = document.getElementById("curr")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " A";
}

</script>


 </div>
</div>

<script>

var msg[5];
msg[0]=" sensors have failed";
msg[1]=" battery temperatures have exceeded  ";
msg[2]=" Voltage levels have exceeded";
msg[3]=" Current values have exceeded";
msg[4]=" accelerometer is malfunctioning";

var mode[5];   
mode[0]= " standby";
mode[1]= "acc ";
mode[2]= "cruise ";
mode[3]= "  brake";

var alert[5];                
alert[0]=" brake jammed";
alert[1]="low voltage";

</script>

</body>
</html>
