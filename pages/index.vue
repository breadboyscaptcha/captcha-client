<template>
    <NuxtLayout>
        <div class="flex flex-col items-center max-w-7xl mt-16 mx-auto">
            <form class="flex flex-col items-center gap-8" @submit="verifyHooman">
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                    <label for="test_username" class="uppercase p-2 text-lg font-semibolg">Username</label>
                    <input type="text" id="test_username" class="p-2 rounded-xl text-lg bg-stone-800 border border-zinc-300"
                        required />
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
        <div :class="`${captcha_id ? `visible` : `invisible`} bg-black/40 backdrop-blur-xl fixed w-full z-50 inset-0`">
            <div class="max-w-2xl mx-auto mt-16">
                <BBCaptcha :image="captcha_image" :prompts="captcha_prompts" @update="checkResults" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter()
const captcha_id = ref(0)
const captcha_prompts = ref<[string, string][]>([["", ""], ["", ""]])
const captcha_image = ref("")
async function verifyHooman(e: Event) {
    e.preventDefault();
    (e.currentTarget as HTMLFormElement).reset()
    const res = await fetch("https://breadboyscaptcha.deno.dev/challenge").then(r => r.json())

    const { image, prompts, id } = res as { image: string, prompts: [string, string][], id: number }
    captcha_id.value = id;
    captcha_image.value = image;
    captcha_prompts.value = prompts

}

async function checkResults(points: [number, number][]) {
    const res = await fetch("https://breadboyscaptcha.deno.dev/challenge", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: captcha_id.value, points })
    })
    captcha_id.value = 0

    if (res.status === 200) {
        router.push("/success")
    } else {
        router.push("/fail")
    }

}
</script>