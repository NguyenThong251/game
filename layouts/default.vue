<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
import { useHead } from 'nuxt/app'
useHead({
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: '/js/swiper/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/top.css' }
    ],
    script: [
        { src: '/js/jquery-3.6.0.js', defer: true },
        { src: '/js/swiper/swiper-bundle.min.js', defer: true },
        { src: '/js/common.js', defer: true },
        { src: '/js/page/top.js', defer: true }
    ]
})
</script>