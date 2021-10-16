---
layout: page
title: Worlds
permalink: /worlds/
---

Please don't spam refresh. If nothing shows up, refresh once and it should work.

Data from [Athena](https://github.com/Wynntils/Athena)

You can click on columns to sort!!!

<table class='table table-striped table-condensed table-dark table-sm' id="worlds"></table>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="//cdn.datatables.net/plug-ins/1.10.19/sorting/time.js"></script>
<script type="text/javascript" src="//cdn.datatables.net/plug-ins/1.11.3/sorting/natural.js"></script>
<script src="/js/worlds.js"></script>
<script>
  getWorlds().then(function(){
    makeArray().then(function(){
      $('#worlds').DataTable({
        data: finalArray,
        paging: false, 
        autoWidth: false,
        searching: false,
        columnDefs: [
          { type: 'time-uni', targets: 1 },
          { type: 'natural', targets: 0 }
        ],
        columns: [
            { title: "World" },
            { title: "Uptime (hh:mm)" },
            { title: "Player Count" },
            { title: "Next soul point in ~x min" }
        ],
        order: [[1,'asc']]
      });
    })
  })
</script>