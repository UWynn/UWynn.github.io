---
layout: page
title: About
permalink: /about/
---

Yoooo hello it's me sayaduck

After wasting hours in #questions, I realized that searching up past answers was really inefficient. So I made this in half a day from the shell of an old project that didn't even get off the ground. [Here's the repo](https://github.com/UWynn/UWynn.github.io) if you're interested, it's a jekyll blog that's been messed with to fit my usecase.


I guess I can plug my stuff so here, [educational wynncraft content](https://www.youtube.com/c/SayaDuck).

If you want to talk about/help UWynn, [here's the discord](https://discord.gg/qMZEmqm7Zh).


## Contributors:

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

{% include js.html %}
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