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
  async function getWorlds() {
    let response = await fetch('//athena.wynntils.com/cache/get/serverList', {
        method: "GET", 
        headers: {
            "Content-Type" : "application/json",
            "User-Agent"   : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36"
        }
    });
    worldJson = await response.json();
    return worldJson;
    // return response;
  }
  worldJson = getWorlds();
  let csvPrep = "data:text/csv;charset=utf-8,";
  csvPrep += "World,Uptime,Player Count\r\n";
  for (i in worldJson['servers']) {
    let dateDiff = Date.now() - i['firstSeen'];
    csvPrep += String(i);
    csvPrep += ',' + String(dateDiff/3600) + ":" + String(dateDiff/60);
    csvPrep += ',' + String(len(i['players'])) + "\r\n";
  }
  var finalCsv = encodeURI(csvPrep); // change this clownery to just a js array since datatables has native support for js arrays
  // aaaaaa
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