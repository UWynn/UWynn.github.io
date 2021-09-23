---
layout: page
title: Contributors
---
<ul>
  {% for author in site.authors %}
    <li>
      <h2>{{ author.name }}</h2>
      <p>{{ author.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>