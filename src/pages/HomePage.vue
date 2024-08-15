<script setup>
import { IconPlayerPlay, IconUser, IconBrandGithub } from '@tabler/icons-vue';

// components
import MiscLogo from '@components/misc/MiscLogo.vue';
import MiscTheme from '@components/misc/MiscTheme.vue';
import MiscBackground from '@components/misc/MiscBackground.vue';


</script>
<template>
    <section class="relative h-full flex justify-center items-center">
        <!-- BACKGROUND -->
        <div class="absolute inset-0">
            <MiscBackground />
        </div>

        <!-- THEMEABLE -->
        <div class="absolute top-4 right-4">
            <MiscTheme />
        </div>

        <!-- CARD - START GAME -->
        <article class="absolute z-20 card bg-opacity-85 w-96 bg-base-100 drop-shadow-md shadow-primary">
            <div class="card-body space-y-2 ">
                <article class="card-title flex-col justify-center">
                    <MiscLogo />
                    <h2 class="font-sofia text-3xl text-rainbown">
                        Tutti Frutti
                    </h2>
                </article>
                <div class="text-primary">
                    <label
                        class="input input-bordered input-primary bg-primary bg-opacity-10  flex items-center gap-2 pl-2"
                    >
                        <IconUser
                            class="absolute"
                            size="24"
                            stroke="2"
                        />
                        <input
                            type="text"
                            class="grow text-center text-primary"
                            placeholder="Jugador"
                        >
                    </label>
                </div>
                <div class="card-actions grid grid-cols-6 justify-between">
                    <div class="col-span-5">
                        <button class="btn btn-block btn-primary text-secondary-content">
                            <IconPlayerPlay
                                stroke="2"
                                size="20"
                            /> Empezar
                        </button>
                    </div>
                    <div>
                        <button class="btn btn-neutral text-white">
                            <IconBrandGithub
                                size="20"
                                stroke="2"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </article>
        <!-- CARD - START GAME -->
    </section>
</template>
