<template>
    <header class="header">
        <div class="header01">
            <div class="inner">
                <div class="left pc">
                </div>
                <div class="right">
                    <FormLogin />
                    <HeaderLanguageSelector />
                </div>
            </div>
        </div>
        <div class="header02 pc">
            <div class="inner">
                <div class="logo">
                    <a href="#/index" class="router-link-exact-active router-link-active"><img
                            src="https://cms.t79.bet/storage/uploads/config/202409/25/config_1727248104_7vGCKJpUyb.png"
                            alt="logoName"></a>
                </div>

                <div class="kf-box">
                    <a class="kf-item promotions"><img src="/image/Desktop/header/khuyen-mai.png">
                        <p>Khuyến mãi</p>
                    </a>
                    <a class="kf-item"><img src="/image/Desktop/header/ho-tro.png">
                        <p>Hỗ Trợ</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="header03 sp">
            <div class="inner">
                <div class="logo">
                    <a href="#/index" class="router-link-exact-active router-link-active"><img
                            src="https://cms.t79.bet/storage/uploads/config/202409/25/config_1727248104_7vGCKJpUyb.png"
                            alt="logoName"></a>
                </div>
                <ul class="right">
                    <li>Đăng Nhập</li>
                    <li>Đăng Ký</li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import FormLogin from './ui/form/FormLogin.vue';

</script>
