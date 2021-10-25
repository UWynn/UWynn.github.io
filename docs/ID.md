---
layout: page
title: IDs
permalink: /ID/
---
<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>
<div id="table-container" class="table-dark"></div>




{% include js.html %}

<script>
    CsvToHtmlTable.init({
      csv_path: '/data/IDs.csv', 
      element: 'table-container', 
      allow_download: false,
      csv_options: {separator: ',', delimiter: '"'},
      datatables_options: {
        "paging": false, 
        "autoWidth": false,
        "order": [],
        "columns": [
          { "width": "20%" }, // name
          { "width": "13%" }, // alias
          { "width": "7%" }, // type
          { "width": "5%" }, // raw or %
          { "width": "40%" }, // effect
          { "width": "15%" } // additional

        ]
      }
    });
</script>