---
layout: page
title: Guides
permalink: /guides/
---
<p>Soon.</p>
<div id="table-container" class="table-dark"></div>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>
<script>
    function linking(link){
    if (link)
      return "<a href='" + link + "' target='_blank'>Link</a>";
    else
      return "";
    }
    CsvToHtmlTable.init({
      csv_path: '/data/guides.csv', 
      element: 'table-container', 
      allow_download: false,
      csv_options: {separator: ',', delimiter: '"'},
      datatables_options: {
        "paging": false, 
        "autoWidth": false,
        "order": [],
        "columns": [
          { "width": "40%" }, // name
          { "width": "20%" }, // category
          { "width": "30%" }, // author
          { "width": "10%" }, // link
        ]
      },
      custom_formatting: [[3, linking]]
    });
</script>