---
layout: page
title: Worlds
permalink: /worlds/
---

Please don't spam refresh.

Data from [Athena](https://github.com/Wynntils/Athena)

<table class='table table-striped table-condensed table-dark' id="worlds"></table>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="//cdn.datatables.net/plug-ins/1.10.19/sorting/time.js"></script>
<script>
  let worldJson;
  let finalArray = [];
  async function getWorlds(callback) {
    let response = await fetch('https://desolate-oasis-19576.herokuapp.com/https://athena.wynntils.com/cache/get/serverList', {
        method: "GET", 
        headers: {
            "Content-Type" : "application/json",
            "User-Agent"   : "UWynn/0.1"
        }
    });
    worldJson = await response.json();
  }  
  async function makeArray() {
    for (i in worldJson['servers']) {
      let dateDiff = parseInt((Date.now() - worldJson['servers'][i]['firstSeen'])/1000);
      let arrayPrep = [];
      arrayPrep.push(String(i));
      if (Math.floor(dateDiff%3600/60) < 10 && Math.floor(dateDiff/3600) < 10) {
        arrayPrep.push("0" + String(Math.floor(dateDiff/3600)) + ":0" + String(Math.floor(dateDiff%3600/60)));
      }
      else if (Math.floor(dateDiff%3600/60) < 10) {
        arrayPrep.push(String(Math.floor(dateDiff/3600)) + ":0" + String(Math.floor(dateDiff%3600/60)));
      }
      else if (Math.floor(dateDiff/3600) < 10){
        arrayPrep.push("0" + String(Math.floor(dateDiff/3600)) + ":" + String(Math.floor(dateDiff%3600/60)));
      }
      else {
        arrayPrep.push(String(Math.floor(dateDiff/3600)) + ":" + String(Math.floor(dateDiff%3600/60)));
      }
      arrayPrep.push(String(Object.keys(worldJson['servers'][i]['players']).length));
      arrayPrep.push(String(20 - Math.floor(dateDiff%3600/60)%20));
      finalArray.push(arrayPrep);
    }
  }
  getWorlds().then(function(){
    makeArray().then(function(){
      $('#worlds').DataTable({
        data: finalArray,
        paging: false, 
        autoWidth: false,
        searching: false,
        columnDefs: [
          { type: 'time-uni', targets: 1 }
        ],
        columns: [
            { title: "World" },
            { title: "Uptime (hh:mm)" },
            { title: "Player Count" },
            { title: "Next soul point in (min)" }
        ],
        order: [[1,'asc']]
      });
    })
  })
</script>