---
layout: page
title: 标签目录
subtitle: 按标签分类
---

{% for tag in site.tags %}
  <h2 class='tag-header wow fadeIn' data-wow-duration='5s' id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <ul>
    {% assign pages_list = tag[1] %}

    {% for node in pages_list %}
      {% if node.title != null %}
        {% if group == null or group == node.group %}
          {% if page.url == node.url %}
          <li class="active wow fadeIn" data-wow-duration="5s"><a href="{{ node.url | prepend: site.baseurl}}" class="active">{{ node.title }}</a></li>
          {% else %}
          <li class="wow fadeIn" data-wow-duration="5s"><a href="{{ node.url | prepend: site.baseurl}}">{{ node.title }}</a></li>
          {% endif %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}