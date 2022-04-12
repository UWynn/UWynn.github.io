---
layout: page
title: Vocabulary
permalink: /vocab-js/
---
Version without JavaScript: [here](/vocab/)

<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>
<div id="table-container" class="table-dark"></div>


{% include js.html %}
<script>
    CsvToHtmlTable.init({
      csv_path: '/_data/vocab.csv', 
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