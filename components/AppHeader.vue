<template>
    <header class="header">
        <div class="header01 pc">
            <div class="inner">
                <div class="left">
                    <HeaderLanguageSelector />
                </div>
                <div class="right">
                    <div class="topbar-ri">
                        <input class="user" placeholder="Tên người dùng" maxlength="16" required>
                        <div class="reg-box">
                            <input class="password" placeholder="mật khẩu" type="password" maxlength="20" required><a
                                class="forget-a" style="display: none;">Quên
                                mật khẩu？</a>
                        </div><!---->
                        <div class="login">Đăng nhập</div><a href="javascript:;" class="register">Đăng ký ngay</a>
                    </div>
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

                <MenuPC />
                <!-- <div class="kf-box">
          <div class="kf-item promotions"><img src="image/Desktop/header/khuyen-mai.png">
            <p>Khuyến mãi</p>
          </div>
          <div class="kf-item"><img src="image/Desktop/header/ho-tro.png">
            <p>Hỗ Trợ</p>
          </div>
        </div> -->
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
            <div class="lg sp">
                <div class="img">
                    <img src="/image/Mobile/home/vn.png" width="27px" height="27px" alt="">
                    <!-- <img src="image/Mobile/home/en.png" width="27px" height="27px" alt=""> -->
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>
