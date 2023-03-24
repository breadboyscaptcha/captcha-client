<template>
  <div
    class="min-h-screen flex flex-col dark:bg-stone-900 dark:text-white tracking-wide leading-6 transition-colors duration-500 ease-in-out"
  >
    <div class="py-4 flex items-center justify-center">
      <div class = "text-4xl uppercase font-black">Bread Boys</div>
    </div>
    <main class="flex-1">
      <div class="border-b border-primary-500 py-1">
      </div>
      <slot />
    </main>
    <UiFooter />
  </div>
</template>

