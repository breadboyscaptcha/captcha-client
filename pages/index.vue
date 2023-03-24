<template>
    <NuxtLayout>
        <div class="flex flex-col items-center max-w-7xl mt-16 mx-auto">
            <form class="flex flex-col items-center gap-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                    <label for="test_username" class="uppercase p-2 text-lg font-semibolg">Username</label>
                    <input type="text" id="test_username"
                        class="p-2 rounded-xl text-lg bg-stone-800 border border-zinc-300" required />
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                    <label for="test_password" class="uppercase p-2 text-lg font-semibolg">Password</label>
                    <input type="password" id="test_password"
                        class="p-2 rounded-xl text-lg bg-stone-800 border border-zinc-300" required />
                </div>
                <button type="submit"
                    class="px-4 py-2 bg-stone-800 border-zinc-300 border rounded-xl w-24 transition duration-500 ease-in-out transform hover:-translate-y-1">Go</button>
            </form>
        </div>
</NuxtLayout></template>

<script setup lang="ts">
async function verifyHooman(e: Event) {
    e.preventDefault()
    
} 

async function checkResults() {
    
}
</script>