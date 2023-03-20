<script setup>
// define links prop
defineProps(["links"]);

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  console.log({ _links });

  return _links;
};
</script>

<template>
  <nav role="list" class="space-y-9">
    <div class="font-bold text-xs text-slate-900">Content of Article</div>
      <ul id="tocNav" role="list" class="mt-1 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200">
        <!-- render each link with depth class -->
        <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link _${link.depth}`" class="relative">
          <a :href="`#${link.id}`" class="block w-full text-xs pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full">
            {{ link.text }}
          </a>
        </li>
    </ul>
  </nav>
</template>
