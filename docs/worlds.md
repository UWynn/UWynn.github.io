---
layout: page
title: Worlds
permalink: /worlds/
---

<table class='table table-striped table-condensed table-dark' id="worlds"></table>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>
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
      arrayPrep.push(String(Math.floor(dateDiff/3600)) + ":" + String(Math.floor(dateDiff%3600/60)));
      arrayPrep.push(String(Object.keys(worldJson['servers'][i]['players']).length) + "\r\n");
      finalArray.push(arrayPrep);
    }
  }
  getWorlds().then(function(){
    makeArray();
  })
  $(document).ready(function() {
    $('#worlds').DataTable( {
        data: finalArray,
        paging: false, 
        autoWidth: false,
        columns: [
            { title: "World" },
            { title: "Uptime" },
            { title: "Player Count" }
        ]
    } );
} );
</script>