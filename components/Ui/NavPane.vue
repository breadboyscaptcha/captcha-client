<template>
  <div class="flex flex-wrap space-x-2 items-center">
    <div
      v-for="(item, index) in data"
      :key="route + `_` + item"
      class="flex flex-row items-center gap-2 h-[2rem]"
    >
      <a :href="`/${data.slice(0, index + 1).join(`/`)}`" class="leading-8">{{ item.replace("_", " ") }}</a>
      
      <span class="p-px"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-right-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 16 16 12 12 8"></polyline>
          <line x1="8" y1="12" x2="16" y2="12"></line></svg>
      </span>
    </div>
    <a :href="`${current}`">{{ last }}</a>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
//router.resolve()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
const current = route.path;
const data = current.split("/").filter((x) => x);
const last = data.pop();
</script>
