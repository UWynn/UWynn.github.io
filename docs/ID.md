---
layout: page
title: IDs
permalink: /ID/
---
Every stat and ID (including Major IDs) defined and explained.

<p>Have a question? Something missing? Contact Saya#8503 on Discord or leave a post on the <a href="https://forums.wynncraft.com/threads/uwynn-release-thread.295591/">release thread</a>.</p>

<table class="table-dark">
  {% for row in site.data.IDs %}
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
          {% if forloop.index == 6 and pair[1] %}
            <a href="{{ pair[1] }}">Additional Info</a>
          {% else %}
            {{ pair[1] }}
          {% endif %}
        </td>
      {% endfor %}
    </tr>
    {% endif %}
  {% endfor %}
</table>

{% include js.html %}