---
layout: page
title: Class Building Vocabulary
permalink: /cbvocab/
---
<div id="table-container" class="table-dark"></div>


<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>
<script>
    CsvToHtmlTable.init({
      csv_path: '/data/cbvocab.csv', 
      element: 'table-container', 
      allow_download: false,
      csv_options: {separator: ',', delimiter: '"'},
      datatables_options: {
        "paging": false, 
        "autoWidth": false,
        "order": [[1,'desc']],
        "columns": [
          { "width": "30%" }, // term
          { "width": "20%" }, // category
          { "width": "50%" } // definition
        ]
      }
    });
</script>