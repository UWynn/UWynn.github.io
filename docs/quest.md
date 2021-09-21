---
layout: page
title: Quest Help
permalink: /quest/
order: 2
---

<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>

<div id="table-container"></div>



<script src="/js/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>
<script>
    CsvToHtmlTable.init({
      csv_path: '/data/quest.csv', 
      element: 'table-container', 
      allow_download: false,
      csv_options: {separator: ',', delimiter: '"'},
      datatables_options: {
        "paging": false, 
        "order": [[1,'asc']],
        "autoWidth": false,
        "columns": [
          { "width": "20%" }, // Issue name
          { "width": "5%" }, // quest level
          { "width": "15%" }, // quest name
          { "width": "5%" }, // quest stage
          { "width": "20%" }, // notes
          { "width": "10%" }, // status 
          { "width": "25%" } // solution
        ]
      }
    });
</script>