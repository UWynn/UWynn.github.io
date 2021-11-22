---
layout: page
title: Market
permalink: /market/
---
<p>Market listing board. Get your own row & update it with <a href="https://forms.gle/auuD6fUSLtePDNfT6">the form</a>.</p>
<div id="table-container" class="table-dark"></div>

{% include js.html %}
<script src="//cdn.datatables.net/plug-ins/1.11.3/sorting/time.js"></script>
<script>
  function imageInsert(link){
    if (link)
      return "<img style='max-height:400px' src='" + link + "' alt='market listing image'>";
    else
      return "";
  }
  CsvToHtmlTable.init({
    csv_path: 'https://docs.google.com/spreadsheets/d/1gs7uBMihI0tIb3P0JeEXOyaMZLfS6cUpEzlPBx5jqLg/export?format=csv', 
    element: 'table-container', 
    allow_download: false,
    csv_options: {separator: ',', delimiter: '"'},
    datatables_options: {
      "paging": false, 
      "order": [[3,'asc']],
      "autoWidth": false,
      "columns": [
        { "width": "15%" }, // Username
        { "width": "30%" }, // Image
        { "width": "45%" }, // Text
        { "width": "10%" }, // Last Updated
      ],
      "columnDefs": [
        { type: 'time-uni', targets: 3 }
      ]
    },
    custom_formatting: [[1, imageInsert]]
  });
</script>

