<script setup>
import { ref } from "vue";
import { IconSun, IconMoon } from '@tabler/icons-vue';

const isChecked = ref(true);

function onClickTheme(value) {
    isChecked.value = value;
    const htmlElement = document.documentElement; 
    
    if(value) htmlElement.setAttribute('data-theme', 'light');
    else htmlElement.setAttribute('data-theme', 'dark');

}

</script>
<template>
    <div class="relative cursor-pointer" @click.prevent="onClickTheme(!isChecked)">
        <input
            type="checkbox"
            class="toggle pointer-events-none toggle-lg"
            v-model="isChecked"
        >

        <span class="absolute right-[.4rem] top-[.35rem] text-base-100">
            <IconSun
                size="20"
                stroke="1.5"
            />
        </span>

        <span class="absolute left-[.4rem] top-[.35rem]">
            <IconMoon 
                size="20" 
                stroke="1.5"
            />
        </span>
    </div>
</template>