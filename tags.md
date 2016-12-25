---
layout: page
title: 标签云
subtitle: 标签搜索
---

<div class="home">
	<h1 class="page-heading">所有标签</h1>

	<p class="post-meta" style="text-align: justify;">
	{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
	{% assign tags = site_tags | split:',' | sort %}
	{% include tagcloud.html %}
	</p>
</div>

<hr>