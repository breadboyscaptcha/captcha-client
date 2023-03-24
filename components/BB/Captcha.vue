<template>
    <div class="bg-stone-700 rounded-xl border-zinc-300 border p-6">
        <div class="w-full flex flex-col items-center gap-8">
            <div class="text-sm">Select two points in the image that follow the following prompts: <span
                    class="text-primary-400">{{ prompts[0].join(`, `) }}</span> and <span class="text-primary-400">{{
                        prompts[1].join(`, `) }}</span></div>
            <div class="relative w-full z-20">
                <img :src="image" class="w-full lg:w-96 z-20 mx-auto relative" />
                <canvas ref="overCanvas" width="792" height="792"
                    class="z-30 w-full lg:w-96 lg:h-96 mx-auto absolute inset-0 cursor pointer" @click="clickOnce" />

            </div>
            <div class="p-2 flex flex-row gap-4">
                <button class="px-4 py-2 bg-stone-800 border border-zinc-300 rounded-xl" @click="update">Ok</button>
                <button class="px-4 py-2 bg-stone-800 border border-zinc-300 rounded-xl" @click="reset"><span
                        class="sr-only">Reset</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-refresh-cw">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg></button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { prompts, image } = defineProps<{ prompts: [string, string][], image: string }>()
const points = ref<[number, number][]>([])
const emit = defineEmits<{ (e: "update", points: [number, number][]): void }>()
const overCanvas = ref<HTMLCanvasElement | null>(null)
function clickOnce(e: MouseEvent) {
    if (points.value.length === 2) {
        return
    }
    const rect = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect();
    const x = (e.pageX - rect.x) * 792 / rect.width;
    const y = (e.pageY - rect.y) * 792 / rect.height;
    const ctx = (e.currentTarget as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
    ctx.strokeStyle = "#ff0000a4"
    ctx.lineWidth = 10
    ctx.strokeRect(x - 36, y - 36, 72, 72)
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = "36px sans-serif"
    ctx.strokeText(`${points.value.length + 1}`, x, y)
    points.value.push([x, y])
}
function reset() {
    points.value = []
    const ctx = (overCanvas.value as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
    ctx.clearRect(0, 0, 792, 792)
}

function update() {
    emit("update", points.value)
}
</script>