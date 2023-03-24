<template>
  <div
    :class="`${
      type === 'success'
        ? 'bg-black/10 dark:bg-black/20 text-green-800 dark:text-green-200 border-l-2 border-green-800 dark:border-green-200'
        : type === 'info'
        ? 'bg-black/10 dark:bg-black/20 text-blue-800 dark:text-blue-200 border-l-2 border-blue-800 dark:border-blue-200'
        : type === 'warning'
        ? 'bg-black/10 dark:bg-black/20 text-yellow-800 dark:text-yellow-200 border-l-2 border-yellow-800 dark:border-yellow-200'
        : type === 'error'
        ? 'bg-black/10 dark:bg-black/20 text-rose-800 dark:text-rose-400 border-l-2 border-rose-800 dark:border-rose-400'
        : type === 'gray'
        ? 'bg-black/10 dark:bg-black/20 text-stone-800 dark:text-stone-200 border-l-2 border-stone-800 dark:border-stone-800'
        : 'bg-primary-500 border-2 border-black text-black'
    }
      text-xs
      font-medium
      flex
      items-center
      px-2
      py-2 w-full flex flex-row items-center justify-between`"
  >
    <slot />
    <button class="px-2" @click="emit(`close`)">
      <svg
        width="24"
        height="24"
        view-box="0 0 24 24"
        :class="`${
          type === 'success'
            ? 'stroke-green-800 dark:stroke-green-200'
            : type === 'info'
            ? 'stroke-blue-800 dark:stroke-blue-200'
            : type === 'warning'
            ? 'stroke-yellow-800 dark:stroke-yellow-200'
            : type === 'error'
            ? 'stroke-rose-800 dark:stroke-rose-200'
            : type === 'gray'
            ? 'stroke-stone-800 dark:stroke-stone-200'
            : 'stroke-primary-800 dark:stroke-primary-200'
        }`"
      >
        <path d="M 08 08 L 16 16 M 16 08 L 08 16" />
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
const { type } = defineProps<{
  type?: "success" | "info" | "warning" | "error" | "gray";
}>();

const emit = defineEmits<{ (e: "close"): void }>();
</script>
