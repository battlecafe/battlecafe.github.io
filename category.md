---
layout: page
title: 标签目录
subtitle: 按标签分类
---

{% for tag in site.tags %}
  <section class="wow fadeIn" data-wow-duration="5s">
  <h2 class='tag-header' id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  </section>
  <ul>
    {% assign pages_list = tag[1] %}

    {% for node in pages_list %}
      {% if node.title != null %}
        {% if group == null or group == node.group %}
          {% if page.url == node.url %}
          <section class="wow fadeIn" data-wow-duration="5s">
          <li class="active"><a href="{{ node.url | prepend: site.baseurl}}" class="active">{{ node.title }}</a></li>
          </section>
          {% else %}
          <section class="wow fadeIn" data-wow-duration="5s">
          <li><a href="{{ node.url | prepend: site.baseurl}}">{{ node.title }}</a></li>
          </section>
          {% endif %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}