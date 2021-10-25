---
layout: page
title: Guides
permalink: /guides/
---
<div id="table-container" class="table-dark"></div>



{% include js.html %}
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