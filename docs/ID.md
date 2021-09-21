---
layout: page
title: IDs
permalink: /ID/
order: 3
---

<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>

<br>
<div id="table-container" class="table-dark"></div>



<script src="/js/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>
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