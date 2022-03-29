---
layout: page
title: Guides
permalink: /guides/
---
<div id="table-container" class="table-dark"></div>

<ul>
  {% for post in site.tags.guide %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {% for author in post.authors %}{{author}}{% if forloop.last == false %}, {% endif %}{% endfor %}</li>
  {% endfor %}
</ul>

