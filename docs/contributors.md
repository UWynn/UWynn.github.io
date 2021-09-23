---
layout: page
title: Contributors
permalink: /contributors/
---
<table class="table table-dark table-striped table-hover" id="contriblist">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Bio</th>
    </tr>
  </thead>
  <tbody>
    {% for author in site.authors %}
    <tr>
      <td><a href="{{ author.url }}">{{ author.name }}</a></td>
      <td>{{ author.position }} </td>
      <td>{{ author.content | markdownify }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>


<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="/js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="/js/csv_to_html_table.js"></script>

<script>
  $(document).ready(function() {
      $('#contriblist').DataTable( {
        "paging": false, 
        "autoWidth": false,
        "columns": [
          { "width": "20%" }, // name
          { "width": "20%" }, // role
          { "width": "60%" } // bio
        ]
      });
  } );
</script>

