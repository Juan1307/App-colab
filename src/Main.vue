<script setup>
import BaseLoader from '@components/loader/BaseLoader.vue';
</script>
<template>
    <main class="w-screen h-screen">
        <RouterView v-slot="{ Component }">
            <Transition 
                appear 
                mode="out-in" 
                enter-active-class="animate-fade-in"
                leave-active-class="animate-fade-out"
            >
                <!-- router-view -->
                <template v-if="Component">
                    <Suspense>
                        <component :is="Component" />
                        <template #fallback>
                            Loading ...
                        </template>
                    </Suspense>
                </template>
                
                <!-- router-loader -->
                <template v-else>
                    <BaseLoader />
                </template>
            </Transition>
        </RouterView>
    </main>
</template>