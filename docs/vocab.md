---
layout: page
title: Vocabulary
permalink: /vocab/
redirect_from: 
  - /cbvocab/
---
Old searchable version with JavaScript: [here](/vocab-js/)

<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>
<div id="table-container" class="table-dark"></div>

<table class="table-dark">
  {% for row in site.data.vocab %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% else %}
    <tr>
      {% for pair in row %}
        <td>
          {{ pair[1] }}
        </td>
      {% endfor %}
    </tr>
    {% endif %}
  {% endfor %}
</table>