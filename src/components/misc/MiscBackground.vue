<script setup>
import { IconApple, IconLemon, IconLemon2, IconPizza, IconCarrot, IconMelon, IconCherry } from '@tabler/icons-vue';


</script>
<template>
    <section class="flex flex-col w-full h-full overflow-hidden">
        <div class="flex justify-around h-1/3">
            <IconLemon2
                class="scale-[1] lg:scale-[1.1] xl:scale-[1.5] text-green-500 svg-draw-animation" 
                stroke=".04"
            />
            <!-- class=" translate-y-[150%] scale-[4]" -->
            <IconCarrot
                class="scale-[.8] lg:scale-[1] xl:scale-[1.4] text-orange-400 svg-draw-animation delay_two"
                stroke=".04"
            />
            <!-- class="-translate-y-[140%] -translate-x-full scale-[3.5]" -->
            <IconPizza
                class="scale-[1] lg:scale-[1.4] xl:scale-[1.8] -rotate-45 text-red-500 svg-draw-animation delay_three"
                stroke=".04"
            />
            <!-- class="-translate-x-[50%] -translate-y-[20%] scale-[2.5]" -->
            <IconLemon
                class="scale-[.5] lg:scale-[.7] xl:scale-[1.3] rotate-90 translate-x-1/4 text-yellow-400 svg-draw-animation"
                stroke=".04"
            />
            <IconCherry
                class="scale-[.9] lg:scale-[1.1] xl:scale-[1.5] rotate-45 translate-x-1/4 text-red-500 svg-draw-animation delay_one"
                stroke=".04"
            />
        </div>
        <div class="flex justify-around h-1/3">
            <!-- class="-translate-y-[200%]  -rotate-45 scale-[4]" -->
            <IconMelon
                stroke=".04"
                class="scale-[.5] lg:scale-[.9] xl:scale-[1.3] -rotate-90 translate-x-[40%] translate-y-[20%] text-orange-600 svg-draw-animation delay_two"
            />
            <!-- class="translate-y-[170%] -translate-x-[150%] rotate-90  scale-[2.8]" -->
            <IconCherry
                class="scale-[.4] lg:scale-[.7] xl:scale-90 -translate-y-1/4 text-red-500 svg-draw-animation"
                stroke=".04"
            />
            <!-- class="translate-y-[130%] -translate-x-[80%] -rotate-45 scale-[3.5]" -->
            <IconMelon
                class="scale-[.5] lg:scale-[.8] xl:scale-125 -rotate-12 text-green-500 svg-draw-animation delay_one"
                stroke=".04"
            />
            <!-- class="-translate-y-[130%] -translate-x-[150%] -rotate-90 scale-[2.8]" -->
            <IconCarrot 
                class="scale-[.5] lg:scale-[.8] xl:scale-110 rotate-12 -translate-x-[10%] -translate-y-[0%] text-orange-400 svg-draw-animation delay_three"
                stroke=".04"
            />
        </div>
        <div class="flex justify-around h-1/3">
            <!-- class="translate-y-full scale-[3]" -->
            <IconApple
                class="scale-[1] md:scale-[1.7] lg:scale-[2] text-red-400 svg-draw-animation"
                stroke=".04"
            />
            <!-- class="translate-y-[120%] -translate-x-[140%]  scale-[2]" -->
            <IconLemon
                class="scale-[.5] lg:scale-[.8] xl:scale-[1] translate-y-[10%] text-yellow-400 svg-draw-animation delay_three"
                stroke=".04"
            />
            <!-- class="-translate-y-[130%] -translate-x-[150%] -rotate-90 scale-[2]" -->
            <IconCarrot
                class="scale-[1] lg:scale-[1.5] xl:scale-[2] -rotate-90 text-orange-400 svg-draw-animation delay_one"
                stroke=".04"
            />
            <!-- class="translate-y-full -translate-x-full -rotate-12 scale-[3]" -->
            <IconApple 
                class="scale-[.8] lg:scale-[1] xl:scale-[1.2] -translate-x-[15%] rotate-12 text-red-500 svg-draw-animation" 
                stroke=".04"
            />
            <IconLemon2
                class="scale-80 lg:scale-[1.5] xl:scale-[1.9] rotate-45 text-green-500 svg-draw-animation delay_two"
                stroke=".04"
            />
        </div>
    </section>
</template>