---
layout: page
title: 博客归档
subtitle: 标签分类
---

# 博客归档
点击博文标题即可浏览

{% for tag in site.tags %}
  <h2 class='tag-header' id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <ul>
    {% assign pages_list = tag[1] %}

    {% for node in pages_list %}
      {% if node.title != null %}
        {% if group == null or group == node.group %}
          {% if page.url == node.url %}
          <li class="active"><a href="{{ node.url | prepend: site.baseurl}}" class="active">{{ node.title }}</a></li>
          {% else %}
          <li><a href="{{ node.url | prepend: site.baseurl}}">{{ node.title }}</a></li>
          {% endif %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}