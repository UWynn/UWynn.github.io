---
layout: page
title: Soul Point Timer
permalink: /sptime/
---

High uptime worlds may be extremely desynced from the 20 minute soul point cycle. 

Data from [Athena](https://github.com/Wynntils/Athena). If the table is blank, Athena is down.

Uptime default sort version [here](/worlds/).

The table is sortable, click on column headers.

<table class='table table-striped table-condensed table-dark table-sm' id="worlds"></table>



{% include js.html %}
<script src="/js/worlds.js"></script>
<script src="//cdn.datatables.net/plug-ins/1.11.3/sorting/natural.js"></script>
<script src="//cdn.datatables.net/plug-ins/1.10.19/sorting/time.js"></script>
<script>
  getWorlds().then(function(){
    makeArray().then(function(){
      $('#worlds').DataTable({
        data: finalArray,
        paging: false, 
        autoWidth: false,
        searching: false,
        columnDefs: [
          { type: 'natural', targets: 0 },
          { type: 'time-uni', targets: 1 }
        ],
        columns: [
            { title: "World" },
            { title: "Uptime (hh:mm)" },
            { title: "Player Count" },
            { title: "Next soul point in < x min" }
        ],
        order: [[3,'asc']]
      });
    })
  })
</script>