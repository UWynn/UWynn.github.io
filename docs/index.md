---
layout: default
---
<div class="container justify-content-center">
  <div class="row justify-content-center">
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6 text-center" style="width: 56rem;">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <h5 class="card-title">Guides</h5>
        <p class="card-text">Stuff, explained.</p>
        <a href="/guides/" class="btn btn-outline-light text-light mt-auto">guides</a>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6" style="width: 18rem;">
      <div class="card-header">
        Quest "bugged" for you?
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Quest Help</h5>
        <p class="card-text">Searchable database of solutions to common and uncommon quest issues.</p>
        <a href="/quest/" class="btn btn-outline-light text-light mt-auto">quest</a>
      </div>
    </div>
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6" style="width: 18rem;">
      <div class="card-header">
        Got an uncommon inquiry?
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">FAQ</h5>
        <p class="card-text">Quick answers to quick questions.</p>
        <a href="#" class="btn btn-outline-light text-light mt-auto">soon</a>
      </div>
    </div>
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6" style="width: 18rem;">
      <div class="card-header">
        Need info on what IDs do?
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">ID list</h5>
        <p class="card-text">Every ID in the game defined. Includes stats and Major IDs.</p>
        <a href="/ID/" class="btn btn-outline-light text-light mt-auto">ID</a>
      </div>
    </div>
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6" style="width: 18rem;">
      <div class="card-header">
        Assigning Int?
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Mana Tables</h5>
        <p class="card-text">Spellcosts with intelligence skill point thresholds for each class.</p>
        <a href="/mana/" class="btn btn-outline-light text-light mt-auto">mana</a>
      </div>
    </div>
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6" style="width: 18rem;">
      <div class="card-header">
        Standardized terms?
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Class Builds Dictionary</h5>
        <p class="card-text">It's a(nother) table, this time for class build vocabulary.</p>
        <a href="/cbvocab/" class="btn btn-outline-light text-light mt-auto">cbvocab</a>
      </div>
    </div>
    <div class="card text-white bg-dark mb-3 me-3 col-sm-6" style="width: 18rem;">
      <div class="card-header">
        Going fast?
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Speed Calculator</h5>
        <p class="card-text">Calculate speed.</p>
        <a href="/speed/" class="btn btn-outline-light text-light mt-auto">speed</a>
      </div>
    </div>
  </div>
</div>


<!--
<div class="home container justify-content-center">

  <h1 class="post-list-heading">Latest</h1>

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
