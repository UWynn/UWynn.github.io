---
layout: page
title: Speed
permalink: /speed/
---

Wynncraft player blocks per second calculator or something.

<form id="bpsform">
    <input type="checkbox" id="sprinting" name="sprinting" value="sprinting" checked>
    <label for="sprinting">Sprinting?</label><br>
    Walkspeed%: <input type="number" name="ws" id="ws" value = "0"><br>
    <input type="radio" id="nospeed" name="whatspeed" value="nospeed" checked>
    <label for="nospeed">No Speed</label><br>
    <input type="radio" id="archerspeed" name="whatspeed" value="archerspeed">
    <label for="archerspeed">Archer Speed (III)</label><br>
    <input type="radio" id="assassinspeed" name="whatspeed" value="assassinspeed">
    <label for="assassinspeed">Assassin Speed (V)</label><br>
    <input type="button" onclick="calcSpeed()" value="Calculate"/>
</form>

<br>
<p id="finalbps"></p>
<br>

**Horse Level (Type): BPS, sourced from [wiki](https://wynncraft.fandom.com/wiki/Horses)**
- 10 (Brown): 11
- 15 (Upgraded Brown): 12.2
- 20 (Black): 13.5
- 25 (Upgraded Black): 14.8
- 30 (Chestnut): 16.0
- 35 (Upgraded Chestnut): 17.3
- 40 (White): 18.5



<script>
    function calcSpeed() {
        var ws = parseInt(document.getElementById('ws').value);
        if (ws < -100) {
            ws = -100;
        }
        else if (ws > 400) {
            ws = 400;
        }

        if (document.getElementById('sprinting').checked) {
            var sprint = 5.612; // sprint
        }
        else {
            var sprint = 4.317 // walk
        }

        if (document.getElementById('nospeed').checked) {
            var spd = 0; // no speed
        }
        else if (document.getElementById('archerspeed').checked) {
            var spd = 3; // speed 3
        } 
        else if (document.getElementById('assassinspeed').checked) {
            var spd = 5; // speed 5
        }

        var finalCalc = (sprint * (1 + (spd * .2)) * (1 + ws / 100)).toFixed(2);
        document.getElementById("finalbps").innerHTML = finalCalc + " blocks per second";
    }
</script>