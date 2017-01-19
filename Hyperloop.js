<!DOCTYPE html>
<html lang="en">
<head>
 <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>





<button type="button">Start POD</button>

<button type="button">Stop POD</button>

<style>

<!-- to move it to the right -->
.container {
    position: relative;
}

.bottomright {
    position: absolute;
    bottom: -15px;
    right: 16px;
    font-size: 15px;
}
    
}

{
   background-color: white;
}



<!-- Navigation bar -->
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100px;
    background-color: #f1f1f1;
}

li a {
    display: block;
    color: #000;
    padding: 8px 6px;
    text-decoration: none;
}


.bottomleft {
    position: absolute;
    bottom: 8px;
    left: 16px;
    font-size: 18px;
}

</style>
</head>


<div class="container">
  <div class="bottomright">
<p>Speed</p>
 
 
 
<p id="deo"></p>

<script>

var my = setInterval(speed, 1000);

function speed() {
var x = document.getElementById("deo")

    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " m/s";
}
</script>

<p>temperature</p> 
<p id="d"></p>

<script>
var my = setInterval(temperature, 1000);
function temperature ()
{
var x = document.getElementById("d")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " T";


}
</script>

<p>Acceleratiion</p> 
<p id="ACC"></p>
<script>
var my = setInterval(Acceleration, 1000);

function Acceleration()
{
var x = document.getElementById("ACC")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " m/s^2";
}

</script>


<p>Position</p>
<p id="POS"></p>
<script>

var my = setInterval(Position, 1000);

function Position()
{
var x = document.getElementById("POS")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " m";
}
</script>


<p>Voltage</p> 
 
<p id="Volt"></p>
<script>
var my = setInterval(Voltage, 1000);

function Voltage()
{
var x = document.getElementById("Volt")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " V";
}

</script>

<p>Current</p> 
 

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
 <div class="bottomleft">
 
<p> Odometer: </p> 
<p id="dt"></p>

<script>
var my = setInterval(distanceTravelled, 1000);
function distanceTravelled ()
{
var x = document.getElementById("dt")
    x.innerHTML = Math.floor((Math.random() * 100) + 1) + " km";


}
</script>


<p> Operational mode: </p>

<!-- display transport, standby, ready, accelerate with wheels, without wheels, cruise, brake, braking with wheels, disk brake, positioning, halt, emergency brake, off -->

Upon receiving info change and display these. 
<!--   -->

<p> System errors: </p>

<ul>
  <li>sensors</a></li>
  <li><a href="#news">CPU</a></li>
  <li><a href="#contact">Communications</a></li>
 
</ul>


<p> System alerts: </p>
</div>
</body>
</html>
