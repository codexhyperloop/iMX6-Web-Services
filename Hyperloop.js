<!DOCTYPE html>
<html>
<body>

<h3>Current time</h3>
<p id="demo"></p>

<script>


var myVar = setInterval(currenttime, 1000);// set

function currenttime() {
var d = new Date();

    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }
 </script>
 
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

</body>
</html>