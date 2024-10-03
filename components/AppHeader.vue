<template>

    <header class="header">
        <div class="header01">
            <div class="inner">
                <div class="left pc">
                    <div class="logo">
                        <a href="#/index" class="router-link-exact-active router-link-active"><img
                                src="https://cms.t79.bet/storage/uploads/config/202409/25/config_1727248104_7vGCKJpUyb.png"
                                alt="logoName"></a>
                    </div>
                </div>
                <div class="right">
                    <FormLoginDesktop />
                </div>
                <div class="js-toggle dropdown-lang">
                    <div class="js-toggle-link tg-link">
                        <p class="icon icon--vi"></p>
                        <!-- <p class="icon icon--en"></p> -->
                        <p class="text">
                            <span>VN</span>
                            <span class="arrow"></span>
                        </p>
                    </div>
                    <div class="js-toggle-content tg-content">
                        <p>Việt Nam</p>
                        <p>English</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="header02 pc">
            <div class="inner">
                <MenuDesktop />
            </div>
        </div>
        <div class="header03 sp">
            <div class="inner">
                <div class="logo">
                    <a href="#/index" class="router-link-exact-active router-link-active"><img
                            src="/image/Desktop/header/logo.png" alt="logoName"></a>
                </div>
                <ul v-if="!userStore.logged" class="right">
                    <li data-popup="login" class="js-popup-link">Đăng Nhập</li>
                    <li>Đăng Ký</li>
                </ul>
            </div>
        </div>
    </header>
    <FormLoginMobile />

</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/userStore';
const userStore = useAuthStore();
// import FormLoginDesktop from './ui/form/FormLoginDesktop.vue';
// import FromLoginMobile from './ui/form/FromLoginMobile.vue';

</script>
