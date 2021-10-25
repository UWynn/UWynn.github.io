---
layout: page
title: Worlds
permalink: /worlds/
---

Please don't spam refresh. If nothing shows up, refresh once and it should work.

Data from [Athena](https://github.com/Wynntils/Athena)

The table is sortable, click on column headers.

<table class='table table-striped table-condensed table-dark table-sm' id="worlds"></table>



{% include js.html %}
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