---
layout: page
title: Common Quest Problems & Solutions
permalink: /quest/
---
Common solutions to fixable mishaps during quests. Not a bug tracker.
<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>
<div id="table-container"></div>



{% include js.html %}
<script>
  CsvToHtmlTable.init({
    csv_path: 'https://docs.google.com/spreadsheets/d/1sQPdqYGAegmhV3ngyjjNaxpoDFnioyJqxIdhR2PeQdY/export?format=csv', 
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