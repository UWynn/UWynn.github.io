---
layout: default
---

<h1 class="page-heading">Quest Issue List</h1>

<p>Have a question? Something missing? Contact Saya#8503 on Discord.</p>

<div id="table-container"></div>



<br>

<!-- Soon:tm:
<div class="home">

  <h1 class="post-list-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
</div>
-->


<script src="js/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="js/csv_to_html_table.js"></script>
<script>
    CsvToHtmlTable.init({
      csv_path: 'data/quest.csv', 
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