---
layout: page
title: Worlds
permalink: /worlds/
---

<div id="table-container" class="table-dark"></div>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>
<script>
  let worldJson;
  let csvPrep = "World,Uptime,Player Count\r\n";
  let finalCsv;
  function getWorlds() {
    let response = fetch('https://desolate-oasis-19576.herokuapp.com/https://athena.wynntils.com/cache/get/serverList', {
        method: "GET", 
        headers: {
            "Content-Type" : "application/json",
            "User-Agent"   : "UWynn/0.1"
        }
    });
    worldJson = response.json();
    return worldJson;
  }  
  function makeCSV() {
    for (i in worldJson['servers']) {
      let dateDiff = Date.now() - worldJson['servers'][i]['firstSeen'];
      csvPrep += String(i);
      csvPrep += "," + String(dateDiff/3600) + ":" + String(dateDiff/60);
      csvPrep += "," + String(Object.keys(worldJson['servers'][i]['players']).length) + "\r\n";
    }
    finalCsv = encodeURI(csvPrep);
  }
  getWorlds();
  makeCSV();
  CsvToHtmlTable.init({
    csv_path: finalCsv, 
    element: 'table-container', 
    allow_download: false,
    csv_options: {separator: ',', delimiter: '"'},
    datatables_options: {
      "paging": false, 
      "autoWidth": false,
      "order": []
    }
  });
</script>